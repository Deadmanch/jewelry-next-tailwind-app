import { DEFAULT_MAX_PRICE, DEFAULT_MIN_PRICE, DEFAULT_PAGE } from '@/constants'
import { IQueryParams } from '@/interfaces'

export const transformSearchParams = (searchParams: IQueryParams) => {
  const priceMin = Number(searchParams.priceMin) || DEFAULT_MIN_PRICE
  const priceMax = Number(searchParams.priceMax) || DEFAULT_MAX_PRICE

  const categoryId = Number(searchParams.categoryId) || undefined
  const discounted = Boolean(searchParams.discounted) || undefined
  const page = Number(searchParams.page) || DEFAULT_PAGE
  const name = searchParams.name || undefined

  return { categoryId, discounted, priceMin, priceMax, page, name }
}
