import {secret_key} from './../config/secret'
import {initialUserValue} from './../util/initial'
import {IUser, IContext, IsAuth} from './../custom.d'
import {AuthenticationError} from 'apollo-server'
import jwt from 'jsonwebtoken'

const isAuth = (context: IContext): IsAuth => {
  try {
    const authHeader = context.session

    const isHeader = (authHeader: string): IUser => {
      const token = authHeader.split('Bearer ')[1]
      if (!token) {
        //throw new AuthenticationError('missing token')
        return {...initialUserValue}
      }
      //@ts-ignore
      const user: IUser = jwt.verify(token, secret_key)
      if (!user.id) return {...initialUserValue}
      return {...initialUserValue, ...user}
    }

    const currentUser: IUser = isHeader(authHeader)

    const isAuthorized = () => {
      if (!currentUser) throw new AuthenticationError('missing token')
      return currentUser ? true : false
    }
    const isOwner = (userId: string) => {
      if (!currentUser) throw new AuthenticationError('missing token')
      return userId === currentUser.id ? true : false
    }
    const isAuthenticated = () => {
      if (!currentUser) throw new AuthenticationError('missing token')
      return currentUser.role === 'ADMIN' ? true : false
    }

    return {
      currentUser,
      isAuthorized: isAuthorized(),
      isAuthenticated: isAuthenticated(),
      isOwner: isOwner(currentUser.id)
    }
  } catch (err) {
    console.log(err)
    return {
      currentUser: {...initialUserValue},
      isAuthorized: false,
      isAuthenticated: false,
      isOwner: false
    }
  }
}

export default isAuth
