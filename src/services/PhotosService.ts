import { Photo } from './../models/Photo'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const photosAPI = createApi({
  reducerPath: 'photosAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jsonplaceholder.typicode.com',
  }),
  endpoints: build => ({
    fetchAllPhotos: build.query<Photo[], ''>({
      query: () => ({
        url: `/photos`,
      }),
    }),
    fetchPhotos: build.query<Photo[], [number, number]>({
      query: ([page, limit]: [number, number]) => ({
        url: `/photos`,
        params: {
          _limit: limit,
          _page: page,
        },
      }),
    }),
    fetchSeveralPhotos: build.query<Photo[], number>({
      query: (limit: number) => ({
        url: `/photos?_limit=${limit}`,
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchAlbum: build.query<Photo[], number>({
      query: (albumId: number) => ({
        url: `/photos`,
        params: {
          albumId: albumId,
        },
      }),
    }),
  }),
})
