import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Photo } from '../../models/Photo'

interface PhotosState {
  photos: Photo[]
  deletedPhotoIds: number[]
  selectedAlbumId: number
}

const initialState: PhotosState = {
  photos: [],
  deletedPhotoIds: [],
  selectedAlbumId: 1
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
        photo =>
          !state.deletedPhotoIds.includes(photo.id) &&
          photo.albumId === state.selectedAlbumId
      )
    },
    setAlbum(state, action: PayloadAction<number>) {
      state.selectedAlbumId = action.payload
      state.photos = state.photos.filter(
        photo =>
          !state.deletedPhotoIds.includes(photo.id) &&
          photo.albumId === action.payload
      )
    }
  }
})

export const photosReducer = photosSlice.reducer
