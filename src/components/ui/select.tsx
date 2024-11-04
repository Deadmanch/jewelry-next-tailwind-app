import { forwardRef } from 'react'

import { Select as HeadlessSelect } from '@headlessui/react'

import { cn } from '@/lib/utils'
import ArrowIcon from '@/public/icons/select-arrow.svg'

interface SelectProps {
  options: { value: string; name: string }[]
  value?: string
  onValueChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, value, onValueChange, ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        <HeadlessSelect
          value={value}
          onChange={onValueChange}
          ref={ref}
          className={cn(
            'flex h-[53px] w-full cursor-pointer appearance-none rounded-sm border border-gray-200 bg-transparent px-3 py-4 pr-10 text-sm text-black placeholder:text-black focus:border-primary focus:outline-none focus:ring-0'
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </HeadlessSelect>

        <ArrowIcon className='absolute right-5 top-1/2 -translate-y-1/2 text-black' />
      </div>
    )
  }
)

Select.displayName = 'Select'
