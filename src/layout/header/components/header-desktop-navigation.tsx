import Link from 'next/link'

import {
  NAVIGATION_MENU_DESKTOP,
  NavigationRouting
} from '@/mock/navigation-routing'
import UserIcon from '@/public/icons/header/user-icon.svg'
import ExitIcon from '@/public/icons/header/exit-icon.svg'
import { cn } from '@/lib/utils'
import { Separator } from '@/components'
import { HeaderCart, HeaderFavorites, HeaderSearch } from '@/layout'

interface HeaderDesktopNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currenPage: string
}
export const HeaderDesktopNavigation = ({
  currenPage,
  className,
  ...props
}: HeaderDesktopNavigationProps) => {
  const linkClass = (href: string) =>
    `text-base font-normal transition-colors duration-300 ease-in-out hover:text-brown-primary ${currenPage === href ? 'border-b-header-nav' : ''}`

  return (
    <div className={cn('hidden lg:flex', className)} {...props}>
      <nav className='flex items-center gap-7 xl:gap-[59px]'>
        <ul className='flex items-center gap-7 xl:gap-[59px]'>
          {NAVIGATION_MENU_DESKTOP.map((item) => (
            <li key={item.id}>
              <Link className={linkClass(item.href)} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Separator className='h-[17px]' orientation='vertical' />
        <div className='flex items-center gap-5 xl:gap-10'>
          <HeaderSearch isDesktop />
          <Link
            href={NavigationRouting.CHECKOUT}
            className={linkClass(NavigationRouting.CHECKOUT)}
          >
            <HeaderCart />
          </Link>
          <Link
            href={NavigationRouting.FAVORITES}
            className={linkClass(NavigationRouting.FAVORITES)}
          >
            <HeaderFavorites />
          </Link>
          <Link
            href={NavigationRouting.PROFILE}
            className={linkClass(NavigationRouting.PROFILE)}
          >
            <UserIcon />
          </Link>
          <Link href={NavigationRouting.HOME}>
            <ExitIcon />
          </Link>
        </div>
      </nav>
    </div>
  )
}
