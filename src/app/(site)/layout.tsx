import { Metadata } from 'next'

import { Container } from '@/components'
import { Header, Footer } from '@/layout'

export const metadata: Metadata = {
  title: 'Shoppe | Jewelry Next App',
  description: 'Shoppe | Jewelry Next App'
}

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-auto'>{children}</main>
      <Footer />
    </Container>
  )
}
