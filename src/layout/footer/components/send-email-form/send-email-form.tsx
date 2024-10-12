'use client'
import { HTMLAttributes } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { cn } from '@/lib/utils'
import { sendEmailSchema } from '@/layout'
import { Input, Notification } from '@/components'
import ArrowIcon from '@/public/icons/arrow-icon.svg'

interface SendEmailFormProps extends HTMLAttributes<HTMLFormElement> {}

export const SendEmailForm = ({ className, ...props }: SendEmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<{ email: string }>({
    resolver: zodResolver(sendEmailSchema)
  })
  const onSubmit = () => {
    toast.custom(
      <Notification type='success' message='Спасибо за подписку!' />,
      {
        position: 'bottom-center',
        duration: 1500
      }
    )
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('relative', className)}
      {...props}
    >
      <Input
        type='email'
        placeholder='Ваш email для акций и предложений'
        aria-label='Email'
        {...register('email')}
        className='border-black'
        error={errors.email}
      />
      <button
        type='submit'
        className='absolute right-2 top-3 transition hover:scale-110'
      >
        <ArrowIcon />
      </button>
    </form>
  )
}
