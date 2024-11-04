import Link from 'next/link'

import DotsIcon from '@/public/icons/ellipsis.svg'
import { cn } from '@/lib/utils'

interface PaginationItemProps {
  page: number | string
  href: string
  isActive?: boolean
}

export const PaginationItem = ({
  page,
  href,
  isActive
}: PaginationItemProps) => {
  if (page === 'dots') {
    return (
      <div className='flex size-10 items-center justify-center text-sm text-gray-300'>
        <DotsIcon />
      </div>
    )
  }
  const className = cn(
    'flex size-10 items-center justify-center text-sm text-black border border-gray-200 bg-transparent rounded-sm transition-colors',
    {
      'z-10 bg-black border-black text-white': isActive,
      'hover:bg-black hover:text-white': !isActive
    }
  )
  return (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}
