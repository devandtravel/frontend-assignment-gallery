import { ReactChild } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Toolbar, Typography } from '@mui/material'

type SettingsProps = {
  limit: number
  decreaseLimit: () => void
  increaseLimit: () => void
  children?: ReactChild
}

export const Settings = ({
  limit,
  decreaseLimit,
  increaseLimit,
  children
}: SettingsProps) => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        m: 1
      }}>
      {children}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <KeyboardArrowUpIcon
          onClick={increaseLimit}
          sx={{
            alignSelf: 'center'
          }}
        />
        <Typography variant='body2' color='text.secondary'>
          Items per page: {limit}
        </Typography>
        <KeyboardArrowDownIcon
          onClick={decreaseLimit}
          sx={{
            alignSelf: 'center'
          }}
        />
      </Box>
    </Toolbar>
  )
}
