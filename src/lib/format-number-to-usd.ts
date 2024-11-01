export const formatNumberToUsd = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}

export const formatNumberToUsdWithDiscount = (
  number: number,
  discount: number
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number - (number * discount) / 100)
}
