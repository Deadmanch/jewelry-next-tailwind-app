import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-screen-2xl', className)} {...props} />
  )
}
