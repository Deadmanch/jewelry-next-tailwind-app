import { useMemo } from 'react'

interface UsePaginationProps {
  currentPage: number
  totalPages: number
}

export const usePagination = ({ currentPage, totalPages }: UsePaginationProps) => {
  return useMemo(() => {
    const pages: (number | 'dots')[] = []

    if (totalPages <= 7) {
      // Если страниц 7 или меньше, показываем их все
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      // Если страниц больше 7, строим логику с дотсами
      if (currentPage <= 5) {
        pages.push(1, 2, 3, 4, 5, 'dots', totalPages)
      } else if (currentPage >= totalPages - 4) {
        pages.push(
          1,
          'dots',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        )
      } else {
        pages.push(1, 'dots', currentPage - 1, currentPage, currentPage + 1, 'dots', totalPages)
      }
    }

    return pages
  }, [currentPage, totalPages])
}
