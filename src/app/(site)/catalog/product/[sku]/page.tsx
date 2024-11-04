import { getProducts } from '@/api/requests'
import { Title } from '@/components'
import { MAXIMUM_LIMIT_PRODUCTS } from '@/constants'
import { IProductsResponse } from '@/interfaces/products.interface'

export async function generateStaticParams() {
  const { products }: IProductsResponse = await getProducts({
    limit: MAXIMUM_LIMIT_PRODUCTS,
    offset: 0
  })
  return products.map((product) => ({ sku: String(product.sku) }))
}

export default function Product() {
  return <Title>Название товара</Title>
}
