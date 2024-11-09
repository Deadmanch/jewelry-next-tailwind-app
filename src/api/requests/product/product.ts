import { IProductsResponse } from '@/interfaces/products.interface'
import { request } from '@/api/instance'
import { API } from '@/api/api'

import { IGetProductsRequest } from './dto'

export const getProducts = async (productRequest: IGetProductsRequest): Promise<IProductsResponse> => {
  return request<IProductsResponse>({
    url: API.product.get,
    query: productRequest
  })
}

export const getProductBySku = async (sku: number): Promise<IProductsResponse> => {
  return request<IProductsResponse>({
    url: API.product.getSku + `/${sku}`
  })
}
