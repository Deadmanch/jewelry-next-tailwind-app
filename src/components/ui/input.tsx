import { forwardRef } from 'react'

import { Input as HeadlessInput } from '@headlessui/react'
import { FieldError } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Text } from '@/components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <>
        <HeadlessInput
          className={cn(
            'flex h-10 w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-b-primary focus:outline-none focus:ring-0',
            className,
            error && 'border-red-500'
          )}
          type={type}
          ref={ref}
          {...props}
        />
        {error && (
          <Text tag='span' className='text-xs text-red-500'>
            {error.message}
          </Text>
        )}
      </>
    )
  }
)

Input.displayName = 'Input'
