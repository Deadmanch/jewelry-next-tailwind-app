export interface IUser {
  id: number
  email: string
  passwordHash: string
  address: string
  name: string
  restoreToken: string
  phone: string
}
