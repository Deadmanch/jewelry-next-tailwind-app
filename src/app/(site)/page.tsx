import Link from 'next/link'

import { getProducts } from '@/api'
import { HeroBlock, ProductList, Title } from '@/components'
import { DEFAULT_LIMIT_PRODUCTS } from '@/constants'
import { NavigationRouting } from '@/mock/navigation-routing'
import { IProductsResponse } from '@/interfaces'
export default async function Home() {
  const { products }: IProductsResponse = await getProducts({
    limit: DEFAULT_LIMIT_PRODUCTS,
    offset: 0
  })
  return (
    <>
      <HeroBlock products={products} className='my-5 2xl:mb-12' />
      <section className='mb-5 flex flex-col gap-10 px-4 2xl:mb-20 2xl:px-0'>
        <div className='flex items-center justify-between'>
          <Title tag='h4'>Последние поступления</Title>
          <Link className='text-primary hover:text-black' href={NavigationRouting.CATALOG}>
            Все
          </Link>
        </div>
        <ProductList className='lg:grid-cols-3' products={products} />
      </section>
    </>
  )
}
