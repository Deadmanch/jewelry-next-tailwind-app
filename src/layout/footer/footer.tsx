import { cn } from '@/lib/utils'
import { Text } from '@/components'
import { SendEmailForm, Social, FooterNavigation } from '@/layout'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        'px-4 py-10 lg:border-t lg:border-gray-200 lg:px-0',
        className
      )}
    >
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5 lg:flex-row-reverse lg:items-center lg:justify-between'>
          <SendEmailForm className='w-full lg:w-[300px]' />
          <FooterNavigation />
        </div>
        <div className='flex flex-col gap-10 md:flex-row-reverse md:justify-between'>
          <Social />
          <Text tag='span'>&copy; {new Date().getFullYear()} Shoppe</Text>
        </div>
      </div>
    </footer>
  )
}
