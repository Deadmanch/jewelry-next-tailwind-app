import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = {
  default: 'bg-black hover:bg-black/75 text-white',
  outline: 'border border-black bg-transparent hover:bg-black hover:text-white'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex h-[53px] items-center justify-center whitespace-nowrap rounded p-4 text-sm font-bold transition duration-300 ease-in-out focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant],
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

Button.displayName = 'Button'
