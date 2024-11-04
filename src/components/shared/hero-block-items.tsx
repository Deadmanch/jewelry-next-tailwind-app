import Image from 'next/image'
import Link from 'next/link'

import { IProduct } from '@/interfaces'
import { cn } from '@/lib/utils'
import { Title, Text } from '@/components'
import { formatNumberToUsd } from '@/lib'
import { NavigationRouting } from '@/mock/navigation-routing'

interface HeroBlockItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct
  image: string
}

export const HeroBlockItems = ({ product, image, className }: HeroBlockItemsProps) => {
  const { name, price, sku } = product
  return (
    <div className={cn('relative', className)}>
      <Image
        src={image}
        alt={name}
        width={1248}
        height={646}
        className='h-[364px] w-full rounded-lg object-cover lg:h-full'
      />
      <div className='absolute bottom-[26px] z-10 flex flex-col items-start justify-center gap-[10px] px-2 lg:bottom-1/4 lg:gap-10 lg:px-10'>
        <div className='flex flex-col gap-1 lg:gap-4'>
          <Title tag='h2' className='text-[20px] font-medium text-white lg:text-[33px]'>
            {name}
          </Title>
          <Text className='text-sm text-white lg:text-[26px]'>{formatNumberToUsd(price)}</Text>
        </div>
        <Link
          href={`${NavigationRouting.PRODUCT}/${sku}`}
          className='inline-flex h-[32px] w-[92px] items-center justify-center whitespace-nowrap rounded border border-white bg-transparent p-4 text-[12px] font-bold text-white transition-all hover:bg-white hover:text-black lg:h-[53px] lg:w-[192px] lg:text-[20px]'
        >
          Смотреть
        </Link>
      </div>
    </div>
  )
}
