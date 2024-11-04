import { forwardRef } from 'react'

import { FieldError } from 'react-hook-form'
import { Textarea as HeadlessTextarea } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { Text } from '@/components'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <>
        <HeadlessTextarea
          className={cn(
            'flex h-20 w-full resize-none border-b border-gray-200 bg-transparent pb-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-b-primary focus:outline-none focus:ring-0',
            className,
            error && 'border-red-500'
          )}
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

Textarea.displayName = 'Textarea'
