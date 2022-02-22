import { v4 as getUnicKey } from 'uuid'

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

type SelectAlbumProps = {
  albumId: number
  setAlbumId: (albumId: number) => void
}
const albumNumbers = Array.from(Array(101).keys()).slice(1)

export const SelectAlbum = ({ albumId, setAlbumId }: SelectAlbumProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Album</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={albumId ? albumId.toString() : ''}
          label='Album'
          onChange={event => setAlbumId(Number(event.target.value))}>
          {albumNumbers &&
            albumNumbers.map(albumNumber => (
              <MenuItem key={getUnicKey()} value={albumNumber}>
                {albumNumber}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}
