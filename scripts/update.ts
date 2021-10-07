import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import argv from 'minimist';
import consola from 'consola';
import isEqual from 'lodash.isequal';

import { packages } from '../meta/packages';

const rootDir = path.resolve(__dirname, '..');

export async function updatePkgJSON(pkgName: string, type: 'build' | 'cli' = 'build') {
  const pkgJsonPath = path.join(rootDir, 'packages', pkgName, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    consola.error(`${chalk.yellow`[yex::update]`}`, `${pkgName} does not exist!`);
    consola.info(
      `${chalk.yellow`[yex::init]`}`,
      `Please execute the command:`,
      chalk.green`pnpm pkg ${pkgName}\n`,
    );
    process.exit(1);
  }

  const pkgInfo = packages.find((i) => i.name === pkgName);
  if (!pkgInfo) {
    consola.error(`${chalk.yellow`[meta/packages.ts]`}`, 'Missing PackageManifest!');
    process.exit(1);
  }

  const pkgJson = await fs.readJSON(pkgJsonPath);

  for (const pkgKey of Object.keys(pkgJson)) {
    if (pkgKey in (pkgInfo as Object) && !['name'].includes(pkgKey)) {
      if (!isEqual(pkgJson[pkgKey], pkgInfo[pkgKey])) {
        consola.info(
          chalk.magenta`[${pkgKey}]`,
          chalk.yellow(pkgJson[pkgKey]),
          chalk.grey`~>`,
          chalk.green(pkgInfo[pkgKey]),
        );
        pkgJson[pkgKey] = pkgInfo[pkgKey];
      }
    }
  }

  await fs.writeJSON(pkgJsonPath, pkgJson, { spaces: 2 });

  if (type === 'cli') consola.success(chalk.green`[packages/${pkgName}/package.json]`, 'Update completed!');
  if (type === 'build') consola.success(chalk.green`@yex/${pkgName}`, chalk.magenta(`v${pkgJson.version}`));
}

async function cli() {
  try {
    const _args = argv(process.argv.slice(2));
    const pkgName = _args._[0];
    if (pkgName) {
      await updatePkgJSON(pkgName, 'cli');
    } else {
      consola.error(`${chalk.yellow`[yex::update]`}`, 'Missing package name!');
      process.exit(1);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

if (require.main === module) cli();