import { API_ROUTES } from './constants/routes'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const API = {
  auth: {
    login: BASE_URL + API_ROUTES.AUTH + '/login',
    register: BASE_URL + API_ROUTES.AUTH + '/register',
    restore: BASE_URL + API_ROUTES.AUTH + '/restore'
  },
  user: {
    update: BASE_URL + API_ROUTES.USER + '/profile',
    get: BASE_URL + API_ROUTES.USER + '/profile'
  },
  product: {
    get: BASE_URL + API_ROUTES.PRODUCTS,
    getFilter: BASE_URL + API_ROUTES.PRODUCTS + '/get-filter',
    getSku: BASE_URL + API_ROUTES.PRODUCTS + '/sku'
  },
  order: {
    get: BASE_URL + API_ROUTES.ORDER + '/my',
    getByID: BASE_URL + API_ROUTES.ORDER,
    create: BASE_URL + API_ROUTES.ORDER
  }
}
