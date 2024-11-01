'use client'
import { HTMLAttributes } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, Autoplay } from 'swiper/modules'

import { cn } from '@/lib'
import { IProduct } from '@/interfaces'
import { HeroBlockItems } from '@/components'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/globals.css'

interface HeroBlockProps extends HTMLAttributes<HTMLDivElement> {
  products: IProduct[]
}
const images_data = ['/images/slider/img-1.webp', '/images/slider/img-2.webp']
export const HeroBlock = ({ products, className }: HeroBlockProps) => {
  return (
    <section className={cn('relative px-4 2xl:px-0', className)}>
      <Swiper
        speed={600}
        grabCursor
        keyboard={{ enabled: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
        pagination={{
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          clickable: true
        }}
        className='HeroBlockSwiper'
        modules={[Pagination, Keyboard, Autoplay]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index + product.sku}>
            <HeroBlockItems product={product} image={images_data[index % images_data.length]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
