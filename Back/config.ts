//export const NODE_ENV = process.env.NODE_ENV || "development"

import dotenv from 'dotenv'

dotenv.config()
// recordar cargar las variables del .env para su base de datos
export const db = process.env.DB
export const user = process.env.USER
export const pass = process.env.PASSWORD
export const secret = process.env.SECRET
export const port = process.env.PORT