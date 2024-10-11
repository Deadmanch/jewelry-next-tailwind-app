import { cn } from '@/lib/utils'

type TextTag = 'p' | 'span'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tag?: TextTag
}

export const Text = ({
  tag = 'p',
  className,
  children,
  ...props
}: TextProps) => {
  const Tag = tag

  return (
    <Tag className={cn('font-regular text-base', className)} {...props}>
      {children}
    </Tag>
  )
}
