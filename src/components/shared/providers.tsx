import React from 'react'

import { LazyMotion, domAnimation } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
      <Toaster />
    </>
  )
}
