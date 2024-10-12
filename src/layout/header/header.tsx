'use client'
import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import Logo from '@/public/logo.svg'
import { NavigationRouting } from '@/mock/navigation-routing'
import {
  HeaderCart,
  Burger,
  HeaderDesktopNavigation,
  MobileMenu
} from '@/layout/header'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const currentPath = usePathname()
  const toogleMenu = () => setOpen(!open)

  return (
    <header
      className={cn('border-b border-gray-200 p-4 lg:pt-12', className)}
      {...props}
    >
      <div className='flex items-center justify-between gap-4'>
        <Link href={NavigationRouting.HOME}>
          <Logo />
        </Link>

        <div className='flex items-center gap-4 lg:hidden'>
          <Link href={NavigationRouting.CHECKOUT}>
            <HeaderCart />
          </Link>
          <Burger isOpen={open} onClick={toogleMenu} />
        </div>
        <HeaderDesktopNavigation currenPage={currentPath} />
      </div>

      <MobileMenu isOpen={open} onClose={toogleMenu} className='lg:hidden' />
    </header>
  )
}
