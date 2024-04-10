import theme from '@/styles/theme'
import 'styled-components'

type Theme = typeof theme

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
