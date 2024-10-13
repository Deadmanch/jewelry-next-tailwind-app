import { z } from 'zod'

import { SendEmailSchemaErrors } from './constants'

export const sendEmailSchema = z.object({
  email: z.string().email(SendEmailSchemaErrors.INVALID_EMAIL)
})
