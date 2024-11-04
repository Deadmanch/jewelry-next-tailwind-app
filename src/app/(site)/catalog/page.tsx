import { getFilter, getProducts } from '@/api'
import { DEFAULT_LIMIT_PRODUCTS } from '@/api/constants/constants'
import { Container, Filters, Pagination, ProductList, Title } from '@/components'
import { DEFAULT_PAGE } from '@/constants'
import { IFilter, IProductsResponse, IQueryParams } from '@/interfaces'
import { transformSearchParams } from '@/lib'

export default async function Catalog({ searchParams }: { searchParams: IQueryParams }) {
  const { page, priceMin, priceMax, discounted, categoryId, name } =
    transformSearchParams(searchParams)
  const offset = (page - DEFAULT_PAGE) * DEFAULT_LIMIT_PRODUCTS
  const { products, totalProducts }: IProductsResponse = await getProducts({
    limit: DEFAULT_LIMIT_PRODUCTS,
    offset,
    categoryId,
    priceMin,
    priceMax,
    discounted,
    name
  })
  const filterItems: IFilter = await getFilter()
  const totalPages = Math.ceil(totalProducts / 6)

  return (
    <Container className='px-4 py-12 2xl:px-0'>
      <Title>Каталог товаров</Title>
      <div className='mt-10 flex flex-col gap-4 lg:gap-[35px] xl:flex-row'>
        <Filters filterItems={filterItems} />
        <div className='flex flex-col gap-10'>
          <ProductList products={products} />
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </div>
      </div>
    </Container>
  )
}
