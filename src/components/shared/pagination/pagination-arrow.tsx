import Link from 'next/link'

import { cn } from '@/lib/utils'
import ArrowIconLeft from '@/public/icons/chevron-left.svg'
import ArrowIconRight from '@/public/icons/chevron-right.svg'

interface PaginationArrowProps {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}

export const PaginationArrow = ({
  href,
  direction,
  isDisabled
}: PaginationArrowProps) => {
  const className = cn(
    'flex size-10 items-center justify-center text-sm border border-gray-200 bg-transparent rounded-sm transition-colors',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-black hover:text-white': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right'
    }
  )
  const icon = direction === 'left' ? <ArrowIconLeft /> : <ArrowIconRight />

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  )
}
