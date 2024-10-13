import { cn } from '@/lib/utils'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: TitleTag
}
const titleVariants = {
  h1: 'text-4xl lg:text-5xl',
  h2: 'text-3xl lg:text-4xl',
  h3: 'text-2xl lg:text-3xl',
  h4: 'text-xl lg:text-2xl',
  h5: 'text-lg lg:text-xl',
  h6: 'text-base lg:text-lg'
}

export const Title = ({
  tag = 'h1',
  className,
  children,
  ...props
}: TitleProps) => {
  const Tag = tag
  return (
    <Tag className={cn('font-bold', titleVariants[tag], className)} {...props}>
      {children}
    </Tag>
  )
}
