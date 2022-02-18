import { Photo } from '../models/Photo'

type PhotoCardProps = {
  photo: Photo
}

export const PhotoCard = ({ photo }: PhotoCardProps) => (
  <div>{JSON.stringify(photo, null, 2)}</div>
)
