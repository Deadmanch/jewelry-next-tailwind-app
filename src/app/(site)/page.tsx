import { Title, Text } from '@/components'

export default function Home() {
  return (
    <div className='mt-10 flex flex-col gap-4'>
      <div>
        <Title>Заголовок h1</Title>
        <Title tag='h2'>Заголовок h2</Title>
        <Title tag='h3'>Заголовок h3</Title>
        <Title tag='h4'>Заголовок h4</Title>
        <Title tag='h5'>Заголовок h5</Title>
        <Title tag='h6'>Заголовок h6</Title>
      </div>
      <div>
        <Text className='text-gray-300'>
          Отлично подойдут к любому гардеробу. Чистое золото высокой пробы,
          которое не оставит вас равнодушным к качеству изделия.
        </Text>
        <Text tag='span' className='text-primary'>
          Отлично подойдут к любому гардеробу.
        </Text>
      </div>
    </div>
  )
}
