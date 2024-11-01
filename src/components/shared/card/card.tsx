'use client'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { cn, formatNumberToUsd, formatNumberToUsdWithDiscount } from '@/lib'
import { Badge, Text, FavoritesButton } from '@/components'
import { NavigationRouting } from '@/mock/navigation-routing'
import EyeIcon from '@/public/icons/eye-icon.svg'
import CartIcon from '@/public/icons/header/cart-icon.svg'
interface CardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  sku: number
  name: string
  price: number
  discount?: number
  image: string
}

export const Card = ({
  sku,
  name,
  price,
  discount,
  image,
  className,
  ...props
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }
  return (
    <Link
      href={`${NavigationRouting.PRODUCT}/${sku}`}
      className={cn('', className)}
      {...props}
    >
      <div className='group relative transition-all'>
        <Image
          src={image}
          alt={name}
          width={380}
          height={380}
          quality={100}
          layout='responsive'

        />
        {discount && (
          <Badge className='absolute left-4 top-4'>- {discount}%</Badge>
        )}
        <FavoritesButton
          className='absolute right-4 top-4'
          isFavorite={isFavorite}
          onFavoriteClick={handleFavoriteClick}
        />
        <div className='absolute inset-0 z-10 flex size-full items-center justify-center gap-[30px] bg-white/60 opacity-0 transition-all duration-300 group-hover:opacity-100'>
          <button>
            <CartIcon />
          </button>
          <EyeIcon />
          <FavoritesButton
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
        </div>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        <Text tag='p' className='text-sm lg:text-[20px]'>
          {name}
        </Text>
        <div className='flex items-center gap-2'>
          {discount && (
            <Text
              tag='span'
              className='text-[12px] font-normal text-red-500 line-through lg:text-[20px] lg:font-medium'
            >
              {formatNumberToUsdWithDiscount(price, discount)}
            </Text>
          )}
          <Text
            tag='span'
            className='text-[12px] font-normal text-primary lg:text-[20px] lg:font-medium'
          >
            {formatNumberToUsd(price)}
          </Text>
        </div>
      </div>
    </Link>
  )
}
