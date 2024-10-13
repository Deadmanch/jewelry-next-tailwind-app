import { cn } from '@/lib/utils'

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
}

export const Counter = ({ value, className, ...props }: CounterProps) => {
  return (
    <div
      className={cn(
        'absolute -top-[2px] left-[calc(100%-10px)] flex h-[12px] min-w-[12px] items-center justify-center rounded-full border border-black bg-white px-[2px] text-[8px] font-bold text-black',
        className
      )}
      {...props}
    >
      {value}
    </div>
  )
}
