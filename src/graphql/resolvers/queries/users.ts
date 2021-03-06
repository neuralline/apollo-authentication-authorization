import {ApolloError} from 'apollo-server'
import User from '../../../models/User'
import authenticatedFields from '../../../providers/authenticatedFields'
import isAuth from '../../../providers/isAuth'
import {IUser} from './../../../custom.d'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, req: any, context: any) => {
  try {
    const users: any = await User.find({}, '-password').populate('department')
    const {currentUser} = isAuth(context)
    const newUser: IUser[] = [...users]
    return authenticatedFields(initialUserValue, newUser, currentUser)
  } catch (err) {
    console.log('database error:', err)
    return new ApolloError('database error')
  }
}
