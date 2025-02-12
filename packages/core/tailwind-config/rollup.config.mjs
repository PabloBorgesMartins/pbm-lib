import { createRollupConfig } from '../../../rollup.config.base.mjs'

export default createRollupConfig({
  input: 'src/index.ts',
  outputDir: 'dist',
  tsconfig: '../../../tsconfig.base.json'
})