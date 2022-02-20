import { Photo } from '../models/Photo'

type CardProps = {
  photo: Photo
  deletePhoto: (id: number) => void
}

export const Card = ({ photo, deletePhoto }: CardProps) => {
  const handleDeletePhoto = (event: React.MouseEvent) => {
    event.stopPropagation()
    deletePhoto(photo.id)
  }

  return (
    <article>
      <div>{JSON.stringify(photo, null, 2)}</div>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <button onClick={handleDeletePhoto}>Delete</button>
      <hr />
    </article>
  )
}
