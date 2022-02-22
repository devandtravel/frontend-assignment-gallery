import { ReactChild, useContext } from 'react'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { AppBar, Box, CssBaseline, IconButton, Toolbar } from '@mui/material'
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

          <h1>Photo Gallery</h1>
          <Box>
            <IconButton
              sx={{ m: 1, p: 1 }}
              onClick={colorMode.toggleColorMode}
              color='inherit'>
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon sx={{ m: 1 }} />
              ) : (
                <Brightness4Icon sx={{ m: 1 }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
