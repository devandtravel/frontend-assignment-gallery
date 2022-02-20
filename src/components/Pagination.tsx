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
  return (
    <MaterialPagination
      count={pagesQuantity}
      page={page}
      onChange={(_, page) => setPage(page)}
    />
  )
}
