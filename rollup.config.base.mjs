import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'

export function createRollupConfig({ input, outputDir, tsconfig, external = [] }) {
  return {
    input,
    output: [
      {
        file: `${outputDir}/index.cjs.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        format: 'esm',
        dir: outputDir,
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      del({ targets: [`${outputDir}/*`, '**/*.tgz'] }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig,
        outDir: outputDir,
        exclude: ['**/*.stories.tsx']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      terser(),
      json()
    ],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    },
    external
  }
}
