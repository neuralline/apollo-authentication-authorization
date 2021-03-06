import {isContext} from 'vm'
import {User} from './graphql.d'
export interface IError {
  general?: string
  email?: string
  password?: string
  name?: string
}

export interface IMainUser {
  id: string
  name: string
}

export interface IUser extends IMainUser {
  id?: string
  name?: string
  email?: string
  phone?: string
  role?: string
  department?: string
  password?: string
}
export enum Role {
  USER,
  ADMIN
}

export type IResolver = (parent: any, args: any, context: Context) => any

export interface IContext {
  req: Express.Request
  url: string
  session: string
  userLoader: ReturnType<typeof userLoader>
}

interface IsAuth {
  currentUser: IUser
  isAuthorized: boolean
  isAuthenticated: boolean
  isOwner: boolean
}
