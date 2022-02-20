import { Photo } from './../models/Photo'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const photosAPI = createApi({
  reducerPath: 'photosAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jsonplaceholder.typicode.com'
  }),
  tagTypes: ['Photo'],
  endpoints: build => ({
    fetchPhotos: build.query<Photo[], [number, number, number]>({
      query: ([page, limit, albumId]: [number, number, number]) => ({
        url: `/photos`,
        params: {
          albumId: albumId,
          _limit: limit,
          _page: page
        }
      }),
      providesTags: () => ['Photo']
    }),

    deletePhoto: build.mutation<Photo, number>({
      query: id => ({
        url: `/photos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Photo']
    })
  })
})
