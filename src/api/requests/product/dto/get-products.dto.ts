export interface IGerProductsDto {
  limit: number
  offset: number
  categoryId?: number
  priceMin?: number
  priceMax?: number
  discounted?: boolean
  name?: string
}
