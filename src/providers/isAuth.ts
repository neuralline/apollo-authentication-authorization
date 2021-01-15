import { IUser } from './../custom.d'
import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'
export default (context: any) => {
  const initialUserValue = {
    id: 'null',
    name: null,
    role: 'USER',
    email: null,
    phone: null
  }

  try {
    const authHeader = context.req.headers.authorization || ''

    const isHeader = (authHeader: string): IUser => {
      const token = authHeader.split('Bearer ')[1]
      if (!token) {
        //throw new AuthenticationError('missing token')
        return { ...initialUserValue }
      }
      //@ts-ignore
      const user: IUser = jwt.verify(token, 'someverysecretkey') || {
        ...initialUserValue
      }
      if (!user.id) return { ...initialUserValue }
      return { ...initialUserValue, ...user }
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
      isAuthorized,
      isAuthenticated,
      isOwner
    }
  } catch (err) {
    console.log(err)
    return {
      currentUser: { ...initialUserValue }
    }
  }
}
