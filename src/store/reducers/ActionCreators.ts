import { Photo } from './../../models/Photo'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const page: number = 1
const limit: number = 5

export const fetchPhotos = createAsyncThunk(
  'fetchPhotos',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Photo[]>(
        page
          ? `http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
          : `http://jsonplaceholder.typicode.com/photos?_limit=${limit}`
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('API Error: photos not loaded')
    }
  }
)
