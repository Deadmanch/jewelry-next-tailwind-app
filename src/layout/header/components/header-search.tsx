'use client'
import { useRef, useState } from 'react'

import { m } from 'framer-motion'
import { useClickAway } from 'react-use'

import { cn } from '@/lib/utils'
import SearchIcon from '@/public/icons/header/search-icon-big.svg'
import SearchIconInput from '@/public/icons/header/search-icon-small.svg'

interface HeaderSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  isDesktop?: boolean
}

export const HeaderSearch = ({
  isDesktop = false,
  className,
  ...props
}: HeaderSearchProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useClickAway(ref, () => setIsOpen(false))

  const toggleSearch = () => setIsOpen(!isOpen)

  return (
    <>
      {isDesktop ? (
        <>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              className={cn('relative z-30', className)}
              ref={ref}
            >
              <SearchIconInput className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type='text'
                placeholder='Поиск'
                aria-label='Поиск'
                className='h-[32px] w-full rounded-sm bg-gray-100 px-[30px] py-2 text-sm outline-primary placeholder:text-gray-500 2xl:min-w-[288px]'
                {...props}
              />
            </m.div>
          )}
          <m.button
            initial={{ scale: 1 }}
            animate={{ scale: isOpen ? 0 : 1 }}
            className='relative'
            onClick={toggleSearch}
            style={{ display: isOpen ? 'none' : 'block', height: '32px' }}
          >
            <SearchIcon />
          </m.button>
        </>
      ) : (
        <div className={cn('relative z-30', className)} ref={ref}>
          <SearchIconInput className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type='text'
            placeholder='Поиск'
            aria-label='Поиск'
            className='h-[32px] w-full rounded-sm bg-gray-100 px-[30px] py-2 text-sm outline-primary placeholder:text-gray-500'
            {...props}
          />
        </div>
      )}
    </>
  )
}
