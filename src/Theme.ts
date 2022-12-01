import { createTheme } from '@mui/material/styles'

type themeColorMode = 'light' | 'dark' | 'default'

export default class {
  public static mode: themeColorMode = 'light'
  public static lightMode = createTheme({
    palette: {
      mode: 'light'
      // primary: {
      //   main: '#80deea',
      // },
      // secondary: {
      //   main: '#18ffff',
      // },
    },
    typography: {
      fontFamily: [
        'Inter', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
      ].join(',')
    }
  })

  public static darkMode = createTheme({
    palette: {
      mode: 'dark'
      // primary: {
      //   main: '#80deea',
      // },
      // secondary: {
      //   main: '#18ffff',
      // },
    }
  })
}
