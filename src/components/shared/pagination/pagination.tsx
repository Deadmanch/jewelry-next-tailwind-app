'use client'

import { useEffect, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import { PaginationItem, PaginationArrow } from '@/components'
import { cn } from '@/lib/utils'
import { DEFAULT_PAGE } from '@/constants'
import { usePagination } from '@/hooks'

interface PaginationProps {
  totalPages: number
  className?: string
}

export const Pagination = ({ totalPages, className }: PaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || DEFAULT_PAGE)
  useEffect(() => {
    const page = Number(searchParams.get('page')) || DEFAULT_PAGE
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }, [searchParams])
  const allPages = usePagination({ currentPage, totalPages })
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    if (Number(pageNumber) === 1) {
      params.delete('page')
    }
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className={cn('inline-flex', className)}>
      <PaginationArrow
        direction='left'
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className='flex gap-2 -space-x-px'>
        {allPages.map((page, index) => (
          <PaginationItem
            key={index}
            page={page}
            href={createPageURL(page)}
            isActive={currentPage === page}
          />
        ))}
      </div>
      <PaginationArrow
        direction='right'
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
}
