import Link from 'next/link'

import LinkIdIcon from '@/public/icons/socials/linkedin-icon.svg'
import TwitterIcon from '@/public/icons/socials/twitter-icon.svg'
import InstagramIcon from '@/public/icons/socials/instagram-icon.svg'
import FaceBookIcon from '@/public/icons/socials/facebook-icon.svg'

const mockData = [
  {
    id: 1,
    icon: <LinkIdIcon />,
    href: '#'
  },
  {
    id: 2,
    icon: <FaceBookIcon />,
    href: '#'
  },
  {
    id: 3,
    icon: <InstagramIcon />,
    href: '#'
  },
  {
    id: 4,
    icon: <TwitterIcon />,
    href: '#'
  }
]

export const Social = () => {
  return (
    <div className='flex gap-8'>
      {mockData.map((item) => (
        <Link
          className='transition-all duration-300 ease-in-out hover:scale-110'
          key={item.id}
          href={item.href}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
