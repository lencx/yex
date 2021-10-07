import path from 'path';
import fs from 'fs-extra';
import assert from 'assert';
import consola from 'consola';
import { execSync, exec } from 'child_process';
import ora from 'ora';

import { updatePkgJSON } from './update';
import { packages } from '../meta/packages';

const spinner = ora('building @yex/monorepo');

const rootDir = path.resolve(__dirname, '..');

const FILES_COPY_ROOT = [
  'LICENSE',
];

const FILES_COPY_LOCAL = [
  'README.md',
];

assert(process.cwd() !== __dirname);

async function buildMetaFiles() {
  for (const { name } of packages) {
    const packageRoot = path.resolve(__dirname, '..', 'packages', name);
    const packageDist = path.resolve(packageRoot, 'dist');

    await updatePkgJSON(name);

    for (const file of FILES_COPY_ROOT) {
      await fs.copyFile(path.join(rootDir, file), path.join(packageDist, file));
    }

    for (const file of FILES_COPY_LOCAL) {
      if (fs.existsSync(path.join(packageRoot, file))) {
        await fs.copyFile(path.join(packageRoot, file), path.join(packageDist, file));
      }
    }

    const packageJSON = await fs.readJSON(path.join(packageRoot, 'package.json'))

    for (const key of Object.keys(packageJSON.dependencies || {})) {
      if (key.startsWith('@yex/')) {
        const depKey = key.split('@yex/')[1];
        const depPkgInfo = packages.find((i) => i.name === depKey);
        packageJSON.dependencies[key] = depPkgInfo.version;
      }
    }

    await fs.writeJSON(path.join(packageDist, 'package.json'), packageJSON, { spaces: 2 });
  }
}

const buildType = (type: string) =>
  `cross-env NODE_OPTIONS="--max-old-space-size=6144" NODE_BUILD_TYPE=${type} rollup -c`;

export async function build() {
  consola.info('Clean up');
  execSync('pnpm run clean', { stdio: 'inherit' });

  consola.info('Rollup\n');
  spinner.start();
  exec('pnpm run build:rollup', async (error) => {
    if (error) return console.error(`exec error: ${error}`);
    spinner.stop().clear();
    await buildMetaFiles();
  });
}

async function cli() {
  try {
    await build();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

if (require.main === module) cli();