type theme = {
  colors: {
    primary: string
  }
}
const heading = {
  fontFamily: 'heading',
  textDecoration: 'inherit',
  textTransform: 'inherit',
  letterSpacing: 'normal',
}

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Open Sans, Noto Kufi Arabic, sans-serif',
    secondary: 'Open Sans, Shahwan, sans-serif',
    book: 'Open Sans, Shahwan, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  size: {
    container: 768,
  },
  payout: {
    header: {
      color: 'white',
      bg: 'black',
    },
    footer: {
      bg: 'gray',
    },
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0099CC',
    // primary: '#07c',
    secondary: '#353535',
    // secondary: '#30c',
    muted: '#f6f6f6',
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t: theme) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  // buttons: {
  //   primary: {},
  // },
  styles: {
    root: {
      color: 'text',
      fontFamily: 'body',
      // lineHeight: 'body',
      // fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      button: {
        fontFamily: 'body',
        fontWeight: 500,
        // fontSize: '.875rem',
        // lineHeight: '2.25rem',
        // letterSpacing: '.0892857143em',
        // textTransform: 'uppercase',
      },
    },
    h1: {
      ...heading,
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: '6rem',
      letterSpacing: '-.015625em',
    },
    h2: {
      ...heading,
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: '3.75rem',
      letterSpacing: '-.0083333333em',
    },
    h3: {
      ...heading,
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: '3.125rem',
    },
    h4: {
      ...heading,
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: '2.5rem',
      letterSpacing: '.0073529412em',
    },
    h5: {
      ...heading,
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    h6: {
      ...heading,
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '2rem',
      letterSpacing: '.0125em',
    },
    subtitle1: {
      ...heading,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.75rem',
      letterSpacing: '.009375em',
    },
    subtitle2: {
      ...heading,
      fontWeight: 500,
      fontSize: '.875rem',
      lineHeight: '1.375rem',
      letterSpacing: '.0071428571em',
    },
    p: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '.03125em',
    },
    p2: {
      fontWeight: 400,
      fontSize: '.875rem',
      letterSpacing: '.0178571429em',
      lineHeight: '1.25rem',
    },

    caption: {
      fontWeight: 400,
      fontSize: '.75rem',
      letterSpacing: '.0333333333em',
      lineHeight: '1.25rem',
    },
    overline: {
      fontWeight: 500,
      fontSize: '.75rem',
      letterSpacing: '.1666666667em',
      lineHeight: '2rem',
      textTransform: 'uppercase',
      p: '0 0 16px',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default theme
