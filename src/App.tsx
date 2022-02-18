import { useEffect } from 'react'
import { PhotoCard } from './components/PhotoCard'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { fetchPhotos } from './store/reducers/ActionCreators'
import { v4 } from 'uuid'

export const App = () => {
  const dispatch = useAppDispatch()
  const { photos, isLoading, error } = useAppSelector(
    state => state.photosReducer
  )
  useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])
  return (
    <div className='App'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : photos.length ? (
        <>
          {photos.map(photo => (
            <PhotoCard key={v4()} photo={photo} />
          ))}
        </>
      ) : (
        <p>No photos found</p>
      )}
    </div>
  )
}
