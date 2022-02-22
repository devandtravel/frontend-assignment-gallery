import { useNavigate } from 'react-router-dom'

import { Pagination as MaterialPagination } from '@mui/material'

type PaginationProps = {
  pagesQuantity: number
  page: number
  setPage: (page: number) => void
}

export const Pagination = ({
  pagesQuantity,
  page,
  setPage
}: PaginationProps) => {
  const navigate = useNavigate()
  return (
    <MaterialPagination
      shape='rounded'
      hideNextButton
      hidePrevButton
      count={pagesQuantity}
      page={page}
      onChange={(_, page) => {
        setPage(page)
        navigate(`?page=${page}`)
      }}
    />
  )
}
