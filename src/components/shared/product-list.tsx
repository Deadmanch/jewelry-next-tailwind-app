import { HTMLAttributes } from 'react'

import { IProduct } from '@/interfaces'
import { Card, Text } from '@/components'
import { cn } from '@/lib'

interface IProductListProps extends HTMLAttributes<HTMLDivElement> {
  products: IProduct[]
}

export const ProductList = ({ products, className }: IProductListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-[70px] 2xl:grid-cols-300',
        className
      )}
    >
      {products.length > 0 ? (
        products.map((product, index) => (
          <Card
            key={index}
            sku={product.sku}
            name={product.name}
            price={product.price}
            discount={product.discount}
            image={product.images[0]}
          />
        ))
      ) : (
        <Text>Товаров не найдено</Text>
      )}
    </div>
  )
}
