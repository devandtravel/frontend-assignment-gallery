import { v4 as getUnicKey } from 'uuid'
import { Card } from './Card'
import { Box } from '@mui/material'
import { Photo } from '../models/Photo'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { photosAPI } from '../services/PhotosService'
import { useAppDispatch } from '../store/hooks'
import { photosSlice } from '../store/reducers/PhotosSlice'

type AlbumProps = {
  photos: Photo[]
  isLoading: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const Album = ({ photos, isLoading, error }: AlbumProps) => {
  const dispatch = useAppDispatch()
  const [deletePhoto] = photosAPI.useDeletePhotoMutation()
  const deleteLocalPhoto = photosSlice.actions.deletePhoto
  const handleDeletePhoto = (id: number) => {
    console.log('deletePhoto', id)
    deletePhoto(id)
    dispatch(deleteLocalPhoto(id))
  }
  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 3
        }}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <p>{error}</p>
        ) : photos ? (
          <>
            {photos.map(photo => (
              <Card
                key={getUnicKey()}
                photo={photo}
                deletePhoto={handleDeletePhoto}
              />
            ))}
          </>
        ) : (
          <p>No photos found. Try to change the page or limit.</p>
        )}
      </Box>
    </section>
  )
}
