import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { photosAPI } from '../services/PhotosService'
import { photosReducer } from './reducers/PhotosSlice'

export const store = configureStore({
  reducer: {
    [photosAPI.reducerPath]: photosAPI.reducer,
    photosReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(photosAPI.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
