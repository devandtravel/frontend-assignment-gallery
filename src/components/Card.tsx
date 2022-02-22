import { MouseEvent, useState } from 'react'

import {
    Box, Button, Card as MaterialCard, CardActions, CardContent, CardMedia, Modal, Typography
} from '@mui/material'

import { Photo } from '../models/Photo'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fitContent',
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxWidth: '95vw'
}
type CardProps = {
  photo: Photo
  deletePhoto: (id: number) => void
}

export const Card = ({ photo, deletePhoto }: CardProps) => {
  const handleDeletePhoto = (event: MouseEvent) => {
    event.stopPropagation()
    deletePhoto(photo.id)
  }
  const [open, setOpen] = useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)
  return (
    <>
      <MaterialCard
        sx={{
          m: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
        <CardMedia
          component='img'
          height='150'
          image={photo.thumbnailUrl}
          alt={photo.title}
          onClick={handleOpenModal}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            ID: {photo.id}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Album: {photo.albumId}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleDeletePhoto}>
            Delete
          </Button>
        </CardActions>
      </MaterialCard>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <CardMedia
            component='img'
            image={photo.url}
            alt={photo.title}
            sx={{
              objectFit: 'scale-down',
              maxHeight: '80vh'
            }}
          />
          <Typography id='modal-modal-description' sx={{ p: 2 }}>
            {photo.title}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
