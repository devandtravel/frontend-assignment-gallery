import { v4 as getUnicKey } from 'uuid'
import { Card } from './Card'
import { photosAPI } from '../services/PhotosService'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { photosSlice } from '../store/reducers/PhotosSlice'

export const Album = () => {
  const MAX_PHOTOS_FROM_API = 5000
  const DEFAULT_PAGE = 1
  const DEFAULT_LIMIT = 3
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const {
    data: photos,
    error,
    isLoading
  } = photosAPI.useFetchPhotosQuery([page, limit])
  const [deletePhoto] = photosAPI.useDeletePhotoMutation()

  const localPhotos = useAppSelector(state => state.photosReducer.photos)
  const dispatch = useAppDispatch()
  const setLocalPhotos = photosSlice.actions.setPhotos
  const deleteLocalPhoto = photosSlice.actions.deletePhoto

  useEffect(() => {
    photos && dispatch(setLocalPhotos(photos))
  }, [photos, setLocalPhotos, dispatch])

  const handleDeletePhoto = (id: number) => {
    console.log('deletePhoto', id)
    deletePhoto(id)
    dispatch(deleteLocalPhoto(id))
  }

  const setPreviousPage = () => {
    setPage(page =>
      page > 1 ? page - 1 : (page = Math.ceil(MAX_PHOTOS_FROM_API / limit))
    )
  }
  const setNextPage = () => {
    setPage(page =>
      page < MAX_PHOTOS_FROM_API / limit ? page + 1 : (page = 1)
    )
  }
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
    <section>
      <div>
        <button onClick={setPreviousPage}>PREVIOUS PAGE</button>
        <span>{page}</span>
        <button onClick={setNextPage}>NEXT PAGE</button>
        <button onClick={decreaseLimit}>DECREASE LIMIT</button>
        <span>{limit}</span>
        <button onClick={increaseLimit}>INCREASE LIMIT</button>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : localPhotos && MAX_PHOTOS_FROM_API ? (
        <>
          {localPhotos.map(photo => (
            <Card
              key={getUnicKey()}
              photo={photo}
              deletePhoto={handleDeletePhoto}
            />
          ))}
        </>
      ) : (
        <p>No photos found. Try to change the page or limit.</p>
      )}
    </section>
  )
}
