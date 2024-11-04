'use client'
import { HTMLAttributes } from 'react'

import { m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { RangeSlider, Input, Select, Switch, Button, Title } from '@/components'
import CloseIcon from '@/public/icons/close-icon.svg'
import SearchIcon from '@/public/icons/header/search-icon-big.svg'
import { IFilter } from '@/interfaces'
import { IReturnProps } from '@/hooks'

interface MobileFiltersProps extends HTMLAttributes<HTMLDivElement> {
  filterItems: IFilter
  filters: IReturnProps
  valueSearch: string
  isOpen: boolean
  onClose: () => void
  updatePrice: (prices: number[]) => void
  handleSearch: () => void
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MobileFilters = ({
  filterItems,
  isOpen,
  valueSearch,
  filters,
  updatePrice,
  handleSearch,
  onChangeSearch,
  onClose,
  className
}: MobileFiltersProps) => {
  const { categories, minPrice, maxPrice } = filterItems
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <m.aside
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={cn('fixed left-0 top-0 z-40 h-screen w-full bg-white', className)}
    >
      {isOpen && (
        <div className='relative flex h-full flex-col p-4'>
          <Title tag='h4' className='mb-10'>
            Фильтр
          </Title>
          <div className='flex-1'>
            <div className='flex flex-col gap-10'>
              <div className='relative'>
                <Input
                  value={valueSearch}
                  onChange={onChangeSearch}
                  type='text'
                  placeholder='Поиск...'
                />
                <button onClick={handleSearch}>
                  <SearchIcon className='absolute right-0 top-0.5' />
                </button>
              </div>
              <Select
                value={filters.categoryId !== undefined ? String(filters.categoryId) : ''}
                onValueChange={(e) => filters.setCategoryId(Number(e.target.value))}
                options={categories.map((category) => ({
                  value: String(category.id),
                  name: category.name
                }))}
              />
              <RangeSlider
                step={1}
                min={minPrice}
                max={maxPrice}
                value={[
                  filters.priceRange.priceMin || minPrice,
                  filters.priceRange.priceMax || maxPrice
                ]}
                onValueChange={updatePrice}
              />
              <div className='flex items-center justify-between'>
                <label htmlFor='sale' className='cursor-pointer'>
                  Со скидкой
                </label>
                <Switch
                  id='sale'
                  checked={filters.discounted}
                  onChange={(value) => filters.setDiscounted(value)}
                />
              </div>
            </div>
          </div>
          <Button className='mt-auto' onClick={onClose}>
            Показать
          </Button>
          <button onClick={onClose}>
            <CloseIcon className='absolute right-[16px] top-[16px]' />
          </button>
        </div>
      )}
    </m.aside>
  )
}
