import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type SeparatorOrientation = 'horizontal' | 'vertical'
interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation
}

export const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) => {
  return (
    <div
      className={cn(
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        'bg-gray-300',
        className
      )}
      {...props}
    />
  )
}
