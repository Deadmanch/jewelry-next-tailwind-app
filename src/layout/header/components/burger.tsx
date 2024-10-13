'use client'
import { HTMLAttributes } from 'react'

import { m } from 'framer-motion'

import { cn } from '@/lib/utils'

interface BurgerProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
  onClick: () => void
}

export const Burger = ({
  className,
  isOpen,
  onClick,
  ...props
}: BurgerProps) => {
  return (
    <button
      className={cn(
        'flex h-8 w-8 flex-col items-end justify-center lg:hidden',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <m.div
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 10,
          duration: 0.2
        }}
        className='h-[2px] w-[20px] rounded-sm bg-black'
      ></m.div>
      <m.div
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 10,
          duration: 0.2
        }}
        className='mt-[4px] h-[2px] w-[20px] rounded-sm bg-black'
      ></m.div>
      <m.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className='mt-[4px] h-[2px] w-[12px] rounded-sm bg-black'
      ></m.div>
    </button>
  )
}
