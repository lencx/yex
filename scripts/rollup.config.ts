import fg from 'fast-glob';
import { resolve } from 'path';
import dts from 'rollup-plugin-dts';
import type { OutputOptions, RollupOptions } from 'rollup';
import esbuild, { Options as ESBuildOptions } from 'rollup-plugin-esbuild';
import { packages } from '../meta/packages';

const esbuildMinifer = (options: ESBuildOptions) => {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk,
  };
};

const configs: RollupOptions[] = [];

for (const { globals, name, external, submodules, iife } of packages) {
  const iifeGlobals = {
    '@yex/core': 'Yex',
    ...(globals || {}),
  };


  const iifeName = 'Yex';
  const functionNames = ['index'];

  if (submodules) {
    functionNames.push(...fg.sync('*/index.ts', { cwd: resolve(`packages/${name}`) }).map(i => i.split('/')[0]));
  }

  for (const fn of functionNames) {
    const input = fn === 'index' ? `packages/${name}/index.ts` : `packages/${name}/${fn}/index.ts`;

    const output: OutputOptions[] = [
      {
        file: `packages/${name}/dist/${fn}.cjs`,
        format: 'cjs',
      },
      {
        file: `packages/${name}/dist/${fn}.mjs`,
        format: 'es',
      },
    ];

    if (iife !== false && fn === 'index') {
      output.push(
        {
          file: `packages/${name}/dist/${fn}.iife.js`,
          format: 'iife',
          name: iifeName,
          extend: true,
          globals: iifeGlobals,
          plugins: [],
        },
        {
          file: `packages/${name}/dist/${fn}.iife.min.js`,
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
      );
    }

    configs.push({
      input,
      output,
      plugins: [
        esbuild(),
      ],
      external: [
        ...(external || []),
      ],
    });

    configs.push({
      input,
      output: {
        file: `packages/${name}/dist/${fn}.d.ts`,
        format: 'es',
      },
      plugins: [
        dts(),
      ],
      external: [
        ...(external || []),
      ],
    });
  }
}

export default configs;
