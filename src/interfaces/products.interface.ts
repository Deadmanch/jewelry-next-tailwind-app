export interface IProductsResponse {
  totalProducts: number
  limit: number
  offset: number
  products: IProduct[]
}

export interface IProduct {
  name: string
  price: number
  discount?: number
  description: string
  images: string[]
  categoryId: number
  sku: number
  reviews: IReview[]
}

export interface IReview {
  name: string
  rating: number
  date: string
  description: string
}
