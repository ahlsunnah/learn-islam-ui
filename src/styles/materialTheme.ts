import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6496f6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#353535',
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
