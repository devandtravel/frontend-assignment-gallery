import { photosReducer } from './reducers/PhotosSlice'
import { photosAPI } from './../services/PhotosService'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

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
