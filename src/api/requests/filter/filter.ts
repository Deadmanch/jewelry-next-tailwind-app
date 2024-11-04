import { API } from '@/api/api'
import { request } from '@/api/instance'
import { IFilter } from '@/interfaces/filter.inteface'

export const getFilter = async (): Promise<IFilter> => {
  return request<IFilter>({
    url: API.product.getFilter
  })
}
