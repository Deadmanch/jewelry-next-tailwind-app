'use client'
import { useEffect, useRef } from 'react'

import { useSearchParams, useRouter } from 'next/navigation'
import { stringify } from 'qs'

import { IQueryParams } from '@/interfaces'
import { DEFAULT_PAGE } from '@/constants'
import { IFilters } from '@/hooks'

export const useQueryFilters = (filters: IFilters) => {
  const isMounted = useRef(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (isMounted.current) {
      const currentPage = searchParams.get('page') || DEFAULT_PAGE
      const params: IQueryParams = {
        ...filters.priceRange,
        categoryId: filters.categoryId,
        name: filters.name,
        discounted: filters.discounted === true ? true : undefined
      }
      if (Number(currentPage) !== 1) {
        params.page = Number(currentPage)
      }
      const queryParams = stringify(params)
      router.push(`?${queryParams}`, { scroll: false })
    }
    isMounted.current = true
  }, [filters, router, searchParams])
}
