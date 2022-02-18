import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchPhotos } from '../store/reducers/ActionCreators'
import { v4 } from 'uuid'
import { Card } from './Card'

export const Album = () => {
  const dispatch = useAppDispatch()
  const { photos, isLoading, error } = useAppSelector(
    state => state.photosReducer
  )
  useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])
  return (
    <section>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : photos.length ? (
        <>
          {photos.map(photo => (
            <Card key={v4()} photo={photo} />
          ))}
        </>
      ) : (
        <p>No photos found</p>
      )}
    </section>
  )
}
