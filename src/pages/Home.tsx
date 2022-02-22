import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Album } from '../components/Album'
import { Pagination } from '../components/Pagination'
import { SelectAlbum } from '../components/SelectAlbum'
import { Settings } from '../components/Settings'
import { photosAPI } from '../services/PhotosService'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { photosSlice } from '../store/reducers/PhotosSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const MAX_PHOTOS_FROM_API = 50
  const DEFAULT_LIMIT = 20
  const DEFAULT_ALBUM = 1
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const pageFromURL = parseInt(query.get('page') || '1', 10)
  const [page, setPage] = useState(pageFromURL)
  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const [albumId, setAlbumId] = useState(DEFAULT_ALBUM)
  const pagesQuantity = Math.ceil(MAX_PHOTOS_FROM_API / limit)
  const {
    data: photos,
    error,
    isLoading
  } = photosAPI.useFetchPhotosQuery([page, limit, albumId])
  const localPhotos = useAppSelector(state => state.photosReducer.photos)
  const { setAlbum, setPhotos } = photosSlice.actions

  useEffect(() => {
    dispatch(setAlbum(albumId))
    photos && dispatch(setPhotos(photos))
  }, [photos, setPhotos, albumId, setAlbum, dispatch])

  const decreaseLimit = () => {
    setLimit(limit =>
      limit > 1 ? limit - 1 : (limit = MAX_PHOTOS_FROM_API - page * (limit - 1))
    )
  }
  const increaseLimit = () => {
    setLimit(limit =>
      limit < MAX_PHOTOS_FROM_API
        ? MAX_PHOTOS_FROM_API >= page * (limit + 1)
          ? limit + 1
          : limit
        : (limit = 1)
    )
  }

  return (
    <>
      <Settings
        limit={limit}
        decreaseLimit={decreaseLimit}
        increaseLimit={increaseLimit}>
        <>
          <Pagination
            pagesQuantity={pagesQuantity}
            page={page}
            setPage={setPage}
          />
          <SelectAlbum albumId={albumId} setAlbumId={setAlbumId} />
        </>
      </Settings>
      <Album photos={localPhotos} isLoading={isLoading} error={error} />
    </>
  )
}
