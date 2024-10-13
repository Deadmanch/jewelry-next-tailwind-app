import { HTMLAttributes } from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { NAVIGATION_FOOTER } from '@/mock/navigation-routing'

interface FooterNavigationProps extends HTMLAttributes<HTMLUListElement> {}

export const FooterNavigation = ({ className }: FooterNavigationProps) => {
  return (
    <ul className={cn('flex flex-col gap-3 md:flex-row', className)}>
      {NAVIGATION_FOOTER.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className='text-xs uppercase text-gray-300 transition-colors duration-300 ease-in-out hover:text-primary xl:text-base'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
