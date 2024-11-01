'use client'
import { useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

interface IPriceRangeProps {
  priceMin?: number
  priceMax?: number
}

interface IQueryParams extends IPriceRangeProps {
  categoryId?: number
  discounted?: boolean
  name?: string
}

export interface IFilters {
  categoryId?: number
  discounted?: boolean
  name?: string
  priceRange: IPriceRangeProps
}

export interface IReturnProps extends IFilters {
  setPriceRange: (key: keyof IPriceRangeProps, value: number) => void
  setCategoryId: (categoryId: number) => void
  setDiscounted: (discounted: boolean) => void
  setName: (name: string) => void
}

export const useFilters = (): IReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof IQueryParams, string>

  const [priceRange, setPriceRange] = useState<IPriceRangeProps>({
    priceMin: Number(searchParams.get('priceMin')) || undefined,
    priceMax: Number(searchParams.get('priceMax')) || undefined
  })
  const updatePrice = (name: keyof IPriceRangeProps, value: number) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }))
  }

  const [categoryId, setCategoryId] = useState<number | undefined>(
    Number(searchParams.get('categoryId')) || undefined
  )
  const updateCategoryId = (value: number) => {
    setCategoryId(value)
  }

  const [discounted, setDiscounted] = useState<boolean | undefined>(
    Boolean(searchParams.get('discounted')) || undefined
  )
  const updateDiscounted = (value: boolean) => {
    setDiscounted(value)
  }
  const [name, setName] = useState<string | undefined>(searchParams.get('name') || undefined)
  const updateName = (name: string) => {
    setName(name)
  }
  return useMemo(
    () => ({
      categoryId,
      discounted,
      priceRange,
      name,
      setName: updateName,
      setPriceRange: updatePrice,
      setCategoryId: updateCategoryId,
      setDiscounted: updateDiscounted
    }),
    [categoryId, discounted, priceRange, name]
  )
}
