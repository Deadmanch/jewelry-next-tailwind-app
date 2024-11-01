import { IProductsResponse } from '@/interfaces/products.interface'
import { request } from '@/api/instance'
import { API } from '@/api/api'

import { IGerProductsDto } from './dto'

export const getProducts = async (dto: IGerProductsDto): Promise<IProductsResponse> => {
  return request<IProductsResponse>({
    url: API.product.get,
    query: dto
  })
}

export const getProductBySku = async (sku: number): Promise<IProductsResponse> => {
  return request<IProductsResponse>({
    url: API.product.getSku + `/${sku}`
  })
}
