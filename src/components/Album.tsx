import { v4 } from 'uuid'
import { Card } from './Card'
import { photosAPI } from '../services/PhotosService'
import { useState } from 'react'

export const Album = () => {
  const maxPhotosFromAPI = 5000
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
  const {
    data: photos,
    error,
    isLoading,
  } = photosAPI.useFetchPhotosQuery([page, limit])

  return (
    <section>
      <div>
        <button
          onClick={() =>
            setPage(page =>
              page > 1 ? page - 1 : (page = maxPhotosFromAPI / limit)
            )
          }>
          PREVIOUS PAGE
        </button>
        <span>{page}</span>
        <button
          onClick={() =>
            setPage(page =>
              page < maxPhotosFromAPI / limit ? page + 1 : (page = 1)
            )
          }>
          NEXT PAGE
        </button>
        <button
          onClick={() =>
            setLimit(limit =>
              limit > 1 ? limit - 1 : (limit = maxPhotosFromAPI)
            )
          }>
          DECREASE LIMIT
        </button>
        <span>{limit}</span>

        <button
          onClick={() =>
            setLimit(limit =>
              limit < maxPhotosFromAPI ? limit + 1 : (limit = 1)
            )
          }>
          INCREASE LIMIT
        </button>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : photos && photos.length ? (
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
