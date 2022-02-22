import { ReactChild, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { AppBar, Box, CssBaseline, IconButton, Link, Toolbar } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { ColorModeContext } from '../ThemedApp'

type HeaderProps = {
  children?: ReactChild
}

export const Header = ({ children }: HeaderProps) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <>
      <CssBaseline />
      <AppBar position='static' sx={{ m: 0, p: 0 }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
          {children}

          <h1>
            <Link
              component={RouterLink}
              to='/'
              underline='none'
              color='inherit'>
              Photo Gallery
            </Link>
          </h1>
          <Box>
            <Link
              component={RouterLink}
              to='/about'
              underline='none'
              color='inherit'>
              About
            </Link>
            <IconButton
              sx={{ ml: 4, mr: 2, p: 1 }}
              onClick={colorMode.toggleColorMode}
              color='inherit'>
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
