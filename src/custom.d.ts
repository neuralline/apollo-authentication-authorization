import { User } from './graphql.d'
export interface IError {
  general?: string
  email?: string
  password?: string
  name?: string
}

interface mainUser {
  id: string
  name: string
}

export interface IUser extends mainUser {
  id?: string
  name?: string
  email?: string
  phone?: string
  role?: string
  department?: string
  password?: string
}
export enum Role {
  User,
  ADMIN
}
