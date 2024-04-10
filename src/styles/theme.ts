export default {
  grid: {
    rowGap: '9.5rem',
    colGap: '6.4rem',
    cols: {
      two: 'repeat(2, 1fr)',
      three: 'repeat(3, 1fr)',
      four: 'repeat(4, 1fr)',
      five: 'repeat(5, 1fr)'
    }
  },
  borderRadius: {
    default: '0.9rem',
    medium: '1.1rem'
  },
  font: {
    family:
      "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 500,
    bold: 600,
    extraBold: 700,
    spacings: {
      xsmall: '0.5px',
      small: '0.75px',
      medium: '1px',
      large: '1.5px',
      xlarge: '2px'
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '3.0rem',
      xxlarge: '4.4rem',
      huge: '5.2rem'
    }
  },
  line: {
    small: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xlarge: '2.0rem',
    xxlarge: '2.8rem'
  },
  colors: {
    colorBackground: '#fdf2e9',
    primaryVeryLight: '#fae5d3',
    primaryLight: '#eb984e',
    primary: '#e67e22',
    shade: '#cf711f',
    shadeDark: '#45260a',
    greyMedium: '#6f6f6f',
    greyMediumDark: '#555',
    greyDark: '#888',
    greyVeryDark: '#333'
  },
  spacings: {
    spacing01: '0.2rem',
    spacing02: '0.4rem',
    spacing03: '0.8rem',
    spacing04: '1.2rem',
    spacing05: '1.6rem',
    spacing06: '2.4rem',
    spacing07: '3.2rem',
    spacing08: '4.8rem',
    spacing09: '6.4rem',
    spacing10: '8rem',
    spacing11: '9.6rem',
    spacing12: '12.8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
