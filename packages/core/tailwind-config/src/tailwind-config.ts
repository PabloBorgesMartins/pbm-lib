import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss/types/config'

import { theme } from './theme'

function flattenColorPalette(
  colors: Record<string, any>
): Record<string, string> {
  return Object.assign(
    {},
    ...Object.entries(
      colors !== null && colors !== undefined ? colors : {}
    ).flatMap(([color, values]) => {
      if (typeof values === 'object')
        return Object.entries(flattenColorPalette(values)).map(
          ([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex
          })
        )

      return [
        {
          [`${color}`]: values
        }
      ]
    })
  )
}

const config: Config = {
  content: [],
  theme: { ...theme },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'scrollbar-w': (value) => ({
            '&::-webkit-scrollbar': {
              width: value
            },
            '&::-webkit-scrollbar-thumb': {
              borderWidth: `calc(${value} / 4)`,
              borderTopWidth: `calc(${value} / 2)`,
              borderBottomWidth: `calc(${value} / 2)`
            }
          })
        },
        { type: 'number', values: theme('spacing') }
      )
      matchUtilities(
        {
          'scrollbar-color': (value) => ({
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: value
            }
          }),
          'scrollbar-bg': (value) => ({
            '&::-webkit-scrollbar-track': {
              backgroundColor: value
            },
            '&::-webkit-scrollbar-thumb': {
              borderColor: value,
              borderStyle: 'solid'
            }
          })
        },
        { type: 'color', values: flattenColorPalette(theme('colors')) }
      )
    }),
    plugin(function ({ addVariant }) {
      addVariant('svg', '&>svg')
      addVariant('before-after', ['&::before', '&::after'])
    })
  ]
}

export { config }
