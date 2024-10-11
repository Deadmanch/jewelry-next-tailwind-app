import { Metadata } from 'next'

import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Shoppe | Jewelry Next App',
  description: 'Shoppe | Jewelry Next App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className='flex min-h-screen flex-col'>
      <main className='flex-auto'>{children}</main>
    </Container>
  )
}
