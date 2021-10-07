import fg from 'fast-glob';
import { resolve } from 'path';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
import type { RollupOptions } from 'rollup';
import esbuild, { Options as ESBuildOptions } from 'rollup-plugin-esbuild';

import { packages } from '../meta/packages';
import { PackageManifest } from '../meta/types';

const configs: RollupOptions[] = [];
for (const _package of packages) {
  const { globals, external, name, submodules, iife } = _package;

  const iifeGlobals = {
    ...(globals || {}),
  };

  const iifeName = 'Yex';
  const functionNames = [];

  if (submodules) {
    functionNames.push(...fg.sync('**/index.ts', { cwd: resolve(`packages/${name}/src`) }).map(i => i.split('/')[0]));
  }

  for (const fn of functionNames) {
    const input = fn === 'index.ts' ? `packages/${name}/src/index.ts` : `packages/${name}/src/${fn}/index.ts`;
    const _output = fn === 'index.ts' ? `index` : `${fn}/index`;

    if (iife !== false) {
      // build dist
      configs.push({
        input,
        output: [
          {
            file: `packages/${name}/dist/index.iife.js`,
            format: 'iife',
            name: iifeName,
            extend: true,
            globals: iifeGlobals,
          },
          {
            file: `packages/${name}/dist/index.iife.min.js`,
            format: 'iife',
            name: iifeName,
            extend: true,
            globals: iifeGlobals,
            plugins: [
              esbuildMinifer({
                minify: true,
              }),
            ],
          },
        ],
        plugins: [
          esbuild(),
          scss({
            output: `packages/${name}/dist/index.min.css`,
            // @ts-ignore
            outputStyle: 'compressed',
          }),
        ],
      });
    }

    // build lib
    configs.push({
      input,
      output: {
        file: `packages/${name}/lib/${_output}.js`,
        format: 'cjs',
      },
      plugins: [
        esbuild(),
        scss({
          output: `packages/${name}/lib/${_output}.css`,
          // @ts-ignore
          outputStyle: 'compressed',
        }),
      ],
    });

    // build es
    configs.push({
      input,
      output: {
        file: `packages/${name}/es/${_output}.js`,
        format: 'es',
      },
      plugins: [
        esbuild(),
        scss({
          output: `packages/${name}/es/${_output}.css`,
          // @ts-ignore
          outputStyle: 'compressed',
        }),
      ],
    });

    // build dts
    configs.push({
      input,
      output: {
        file: `packages/${name}/types/${_output}.d.ts`,
        format: 'es',
      },
      plugins: [
        dts(),
      ],
      external: [
        /\.scss$/,
        ...(external || []),
      ],
    });
  }
}

export default configs;

function esbuildMinifer(options: ESBuildOptions) {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk,
  };
};

function buildDST(pkg: PackageManifest, input: string, output: string): RollupOptions {
  return {
    input,
    output: {
      file: `packages/${pkg.name}/types/${output}.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
    external: [
      /\.scss$/,
      ...(pkg.external || []),
    ],
  }
}
