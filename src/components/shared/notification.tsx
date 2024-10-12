import { HTMLAttributes } from 'react'

import { Text } from '@/components'
import ErrorIcon from '@/public/icons/notification/error-icon.svg'
import { cn } from '@/lib/utils'
import SuccessIcon from '@/public/icons/notification/success-icon.svg'
type NotificationType = 'success' | 'error'
interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  type: NotificationType
  message: string
}

export const Notification = ({
  type,
  message,
  className,
  ...props
}: NotificationProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-5 px-5 py-4 text-base text-gray-300 shadow-sm lg:w-auto',
        type === 'success' ? 'bg-gray-200' : 'bg-red-500 text-white',
        className
      )}
      {...props}
    >
      {type === 'success' ? (
        <SuccessIcon />
      ) : (
        <ErrorIcon className='fill-red-500 stroke-white' />
      )}
      <Text>{message}</Text>
    </div>
  )
}
