import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-sm bg-primary px-2 py-1 text-xs font-medium text-white',
        className
      )}
      {...props}
    />
  )
}
