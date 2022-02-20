import { Photo } from './../../models/Photo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PhotosState {
  photos: Photo[]
  deletedPhotoIds: number[]
}

const initialState: PhotosState = {
  photos: [],
  deletedPhotoIds: []
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    deletePhoto(state, action: PayloadAction<number>) {
      state.photos = state.photos.filter(photo => photo.id !== action.payload)
      state.deletedPhotoIds.push(action.payload)
    },
    setPhotos(state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload.filter(
        photo => !state.deletedPhotoIds.includes(photo.id)
      )
    }
  }
})

export const photosReducer = photosSlice.reducer
