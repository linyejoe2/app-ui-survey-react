import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LanguageIcon from '@mui/icons-material/Language'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
// import Brightness4Icon from '@mui/icons-material/Brightness4'
// import Brightness7Icon from '@mui/icons-material/Brightness7'
// import { useDispatch, useSelector, RootState } from '../service/store'
// import { toggleTheme } from '../service/services'
import Link from '@mui/material/Link'
import { useTranslation } from 'react-i18next'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button, Slide, useMediaQuery } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// const langOption = ['en', 'zh-TW']

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props
  const trigger = useScrollTrigger({
    target: window
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function TopNavigationBar() {
  // const dispatch = useDispatch()
  // const themeState = useSelector((state: RootState) => state.themeState)
  const { t, i18n } = useTranslation()
  const onMobile = useMediaQuery('(max-width:600px)')
  // const [showHelp, setShowHelp] = useState(false)
  // useEffect(() => {
  //   if (window.location.hash === '#/survey') setShowHelp(true)
  //   else setShowHelp(false)
  //   console.log("okfsdf")
  // }, [window.location])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    handleClose()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar className='top-bar'>
            <Box
              data-tour="0"
              sx={{
                height: '35px',
                width: 35
              }}>
              <a href="#" style={{ height: 'inherit' }}>
                <img src="./TP.svg" style={{
                  height: 'inherit',
                  padding: '0',
                  marginRight: '10px',
                  display: 'inline-block',
                  willChange: 'filter'
                }} alt="TP logo" />
              </a>
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
              <Link href='./' underline='none' color="unset">
                {/* {TITLE} */}
                {onMobile ? '' : t('main.title')}
              </Link>
            </Typography>
            {/* <Link href='./#/survey' underline='none' color="unset">
            survey
          </Link> */}
            {/* {isIOS() ? "isIOS" : "notIOS"} */}
            <Button
              key={t('about-us.title')}
              // onClick={handleCloseNavMenu}
              href="./#/about-us"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {t('about-us.title')}
            </Button>
            <IconButton
              data-tour='2-1'
              size="large"
              title="change language"
              onClick={handleClick}
              color="inherit">
              <LanguageIcon />
            </IconButton>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                // 'aria-labelledby': 'lock-button',
                // role: 'listbox',
              }}
            >
              {/* {langOption} */}
              <MenuItem onClick={() => changeLanguage('en')}>en</MenuItem>
              <MenuItem onClick={() => changeLanguage('zh-TW')}>zh-TW</MenuItem>
              <MenuItem onClick={() => changeLanguage('zh')}>zh</MenuItem>
              <MenuItem onClick={() => changeLanguage('ja')}>jp</MenuItem>
            </Menu>
            {/* {
            showHelp
              ? <IconButton
                data-tour='2-2'
                size="large"
                title="help"
                color="inherit">
                <HelpOutlineIcon />
              </IconButton>
              : <></>
          } */}

            {/* {themeState
            ? <IconButton
              size="large"
              title="change theme to dark"
              onClick={() => {
                dispatch(toggleTheme())
              }}
              color="inherit">
              <Brightness4Icon />
            </IconButton>
            : <IconButton
              size="large"
              title="change theme to light"
              onClick={() => { dispatch(toggleTheme()) }}
              color="inherit">
              <Brightness7Icon />
            </IconButton>
          } */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box sx={{
        height: onMobile ? 10 : 20,
        minHeight: onMobile ? 10 : 20
      }} />
    </Box>
  )
}
