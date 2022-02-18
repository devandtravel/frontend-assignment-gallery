import { Photo } from '../models/Photo'

type CardProps = {
  photo: Photo
}

export const Card = ({ photo }: CardProps) => (
  <article>
    <div>{JSON.stringify(photo, null, 2)}</div>
    <button>DELETE</button>
    <hr />
  </article>
)
