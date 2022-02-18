import { Photo } from '../models/Photo'

type CardProps = {
  photo: Photo
}

export const Card = ({ photo }: CardProps) => (
  <article>{JSON.stringify(photo, null, 2)}</article>
)
