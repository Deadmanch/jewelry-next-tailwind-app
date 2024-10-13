import { cn } from '@/lib/utils'
import { Counter } from '@/components/ui'
import CartIcon from '@/public/icons/header/cart-icon.svg'

interface HeaderCartProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderCart = ({ className, ...props }: HeaderCartProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <CartIcon />
      <Counter value={100} />
    </div>
  )
}
