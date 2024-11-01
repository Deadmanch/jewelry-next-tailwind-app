import * as React from 'react'

import { cn } from '@/lib/utils'
import FavoritesIcon from '@/public/icons/header/favorites-icon.svg'

interface FavoritesProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean
  onFavoriteClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const FavoritesButton = React.forwardRef<
  HTMLButtonElement,
  FavoritesProps
>(({ isFavorite, onFavoriteClick, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onFavoriteClick}
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <FavoritesIcon
        className={cn(
          '',
          isFavorite ? 'fill-primary stroke-primary' : 'fill-none stroke-black'
        )}
      />
    </button>
  )
})

FavoritesButton.displayName = 'FavoritesButton'
