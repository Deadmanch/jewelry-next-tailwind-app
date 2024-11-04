'use client'

import { useState } from 'react'

import { RangeSlider, Input, Select, Switch, Button, MobileFilters } from '@/components'
import { IFilter } from '@/interfaces'
import { cn } from '@/lib'
import SearchIcon from '@/public/icons/header/search-icon-big.svg'
import FilterIcon from '@/public/icons/filter-icon.svg'
import { useFilters, useQueryFilters } from '@/hooks'

interface FiltersProps extends React.HTMLAttributes<HTMLDivElement> {
  filterItems: IFilter
}

export const Filters = ({ filterItems, className, ...props }: FiltersProps) => {
  const { categories, minPrice, maxPrice } = filterItems
  const [open, setOpen] = useState(false)
  const filters = useFilters()
  useQueryFilters(filters)
  const toggleFilter = () => setOpen(!open)

  const updatePrice = (prices: number[]) => {
    filters.setPriceRange('priceMin', prices[0])
    filters.setPriceRange('priceMax', prices[1])
  }

  const [searchTerm, setSearchTerm] = useState(filters.name || '')
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      filters.setName(searchTerm)
    }
    setSearchTerm('')
  }

  return (
    <>
      <aside className={cn('hidden w-[266px] gap-10 xl:flex xl:flex-col', className)} {...props}>
        <div className='relative'>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          value={[filters.priceRange.priceMin || minPrice, filters.priceRange.priceMax || maxPrice]}
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
      </aside>
      <Button
        variant='ghost'
        className='group h-[20px] w-[80px] gap-[10px] transition-all xl:hidden'
        onClick={toggleFilter}
      >
        <FilterIcon className='group-hover:fill-black' />
        Фильтры
      </Button>
      <MobileFilters
        filters={filters}
        updatePrice={updatePrice}
        filterItems={filterItems}
        handleSearch={handleSearch}
        onChangeSearch={(e) => setSearchTerm(e.target.value)}
        valueSearch={searchTerm}
        isOpen={open}
        onClose={toggleFilter}
        className='xl:hidden'
      />
    </>
  )
}
