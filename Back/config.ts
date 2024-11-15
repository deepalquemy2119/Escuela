

import dotenv from 'dotenv'

dotenv.config()

export const db = process.env.DB
export const user = process.env.USER
export const pass = process.env.PASSWORD
export const secret = process.env.SECRET
export const port = process.env.PORT