import { Counter } from '@/components'
import { cn } from '@/lib/utils'
import FavoriteIcon from '@/public/icons/header/favorites-icon.svg'

interface HeaderFavoritesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderFavorites = ({
  className,
  ...props
}: HeaderFavoritesProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <FavoriteIcon />
      <Counter value={0} />
    </div>
  )
}
