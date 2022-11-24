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
