import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    default: 'omniDark',
    backgrounds: {
      values: [
        {
          name: 'omniLight',
          value: theme.colors.colorBackground
        },
        {
          name: 'omniDark',
          value: '#333'
        }
      ]
    }
  }
}

export default preview

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme
    },
    Provider: ThemeProvider,
    GlobalStyles
  })
]
