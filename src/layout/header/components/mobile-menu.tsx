import { m } from 'framer-motion'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import UserIcon from '@/public/icons/header/user-icon.svg'
import ExitIcon from '@/public/icons/header/exit-icon.svg'
import { NavigationRouting } from '@/mock/navigation-routing'
import { Separator } from '@/components/ui'

import { HeaderFavorites } from './header-favorites'
import { HeaderSearch } from './header-search'

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose, className }: MobileMenuProps) => {
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
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <m.aside
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={cn(
        'fixed right-0 top-[64px] z-40 h-screen w-full bg-white',
        className
      )}
    >
      {isOpen && (
        <div className='flex flex-col gap-10 p-4'>
          <HeaderSearch />
          <nav className='flex flex-col gap-6'>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href={NavigationRouting.HOME} onClick={onClose}>
                  Главная
                </Link>
              </li>
              <li>
                <Link href={NavigationRouting.CATALOG} onClick={onClose}>
                  Магазин
                </Link>
              </li>
              <li>
                <Link href={NavigationRouting.ABOUT} onClick={onClose}>
                  О нас
                </Link>
              </li>
            </ul>
            <Separator />
            <ul className='flex flex-col gap-6'>
              <li>
                <Link
                  href={NavigationRouting.PROFILE}
                  className='flex items-center gap-2'
                  onClick={onClose}
                >
                  <UserIcon />
                  Мой профиль
                </Link>
              </li>
              <li>
                <Link
                  href={NavigationRouting.FAVORITES}
                  className='flex items-center gap-2'
                  onClick={onClose}
                >
                  <HeaderFavorites />
                  Избранное
                </Link>
              </li>
              <li>
                <Link
                  href={NavigationRouting.HOME}
                  className='flex items-center gap-2'
                  onClick={onClose}
                >
                  <ExitIcon />
                  Выйти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </m.aside>
  )
}
