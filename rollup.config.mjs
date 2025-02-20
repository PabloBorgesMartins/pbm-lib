import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import packageJson from "./package.json" assert { type: "json" };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      format: 'esm',
      dir: 'lib',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'zustand',
    'axios',
    'universal-cookie'
  ],
  plugins: [
    peerDepsExternal(),
    del({ targets: ['lib/*'] }),
    resolve(),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser(),
    json()
  ]
}
