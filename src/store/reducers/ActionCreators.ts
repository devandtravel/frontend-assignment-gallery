import { photosSlice } from './PhotoSlice'
import { Photo } from './../../models/Photo'
import axios from 'axios'
import { AppThunk } from './../store'

const page: number = 1
const limit: number = 5

export const fetchPhotos = (): AppThunk => async dispatch => {
  try {
    dispatch(photosSlice.actions.fetchPhotos())
    const response = await axios.get<Photo[]>(
      page
        ? `http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
        : `http://jsonplaceholder.typicode.com/photos?_limit=${limit}`
    )
    dispatch(photosSlice.actions.fetchPhotosSuccess(response.data))
  } catch (error: any) {
    dispatch(photosSlice.actions.fetchPhotosError(error.message as string))
  }
}
