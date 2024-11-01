import { forwardRef } from 'react'

import { Switch as HeadlessSwitch } from '@headlessui/react'

import { cn } from '@/lib/utils'

interface SwitchProps extends React.ComponentProps<typeof HeadlessSwitch> {
  checked?: boolean
  onChange?: (value: boolean) => void
  className?: string
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onChange, ...props }, ref) => {
    return (
      <HeadlessSwitch
        ref={ref}
        checked={checked}
        onChange={onChange}
        className={cn(
          'group relative inline-flex h-5 w-8 flex-shrink-0 cursor-pointer items-center rounded-full p-1 focus:outline-none focus:outline-black',
          className,
          checked ? 'bg-primary' : 'bg-gray-300'
        )}
        {...props}
      >
        <span
          aria-hidden='true'
          className={cn(
            'pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out',
            checked ? 'translate-x-3' : 'translate-x-0'
          )}
        />
      </HeadlessSwitch>
    )
  }
)

Switch.displayName = 'Switch'
