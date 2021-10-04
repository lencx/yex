import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import argv from 'minimist';
import consola from 'consola';

import { packages } from '../meta/packages';

const _args = argv(process.argv.slice(2));
const pkgName = _args._[0];
const rootDir = path.resolve(__dirname, '..');

let pkgInfo: unknown;

async function initPkg() {
  if (pkgName) {
    pkgInfo = packages.find((i) => i.name === pkgName);
    if (!pkgInfo) {
      consola.error(`${chalk.yellow`[meta/packages.ts]`}`, 'Missing PackageManifest!');
      process.exit(1);
    }
  } else {
    consola.error(`${chalk.yellow`[yex::pkg]`}`, 'Missing package name!');
    process.exit(1);
  }

  const tempPkgFile = fs.readFileSync(path.join(rootDir, 'meta/template.pkg.json'), { encoding: 'utf-8' })
    .replace(/\{\{pkg\}\}/ig, pkgName);
  const tempPkgJSON = JSON.parse(tempPkgFile);
  const pkgDir = path.join(rootDir, `packages/${pkgName}`);
  const pkgJsonPath = path.join(pkgDir, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    await fs.mkdirs(pkgDir);
    let readme = `# @yex/${pkgName}\n`;

    for (const pkgKey of Object.keys(tempPkgJSON)) {
      if (pkgKey in (pkgInfo as Object)) {
        tempPkgJSON[pkgKey] = pkgKey === 'name' ? `@yex/${pkgInfo[pkgKey]}` : pkgInfo[pkgKey];
        if (pkgKey === 'description') readme += `\n> ${pkgInfo[pkgKey]}\n`;
      }
    }

    await fs.writeFile(`${pkgDir}/README.md`, readme);
    await fs.writeJSON(pkgJsonPath, tempPkgJSON, { spaces: 2 });

    console.log();
    consola.success(`${chalk.green`packages/${pkgName}`}`, 'Creation complete!');
  } else {
    consola.warn(`${chalk.green`packages/${pkgName}`}`, 'Already exists!');
    process.exit(0);
  }
}

async function cli() {
  try {
    await initPkg();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

if (require.main === module) cli();