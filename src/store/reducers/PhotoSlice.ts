import { fetchPhotos } from './ActionCreators'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo } from './../../models/Photo'
interface PhotosState {
  photos: Photo[]
  isLoading: boolean
  error: string
}

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  error: '',
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotos.fulfilled.type]: (state, action: PayloadAction<Photo[]>) => {
      state.isLoading = false
      state.error = ''
      state.photos = action.payload
    },
    [fetchPhotos.pending.type]: state => {
      state.isLoading = true
    },
    [fetchPhotos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const photosReducer = photosSlice.reducer
