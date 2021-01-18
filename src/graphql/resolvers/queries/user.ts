import {ApolloError} from 'apollo-server'
import User from '../../../models/User'
import authenticatedFields from '../../../providers/authenticatedFields'
import isAuth from '../../../providers/isAuth'
import {IUser} from './../../../custom.d'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, {id}: {id: string}, context: any) => {
  try {
    const user: any = await User.findOne({_id: id})
    const {currentUser} = isAuth(context)
    const newUser: IUser[] = [user]
    return authenticatedFields(initialUserValue, newUser, currentUser)[0]
  } catch (err) {
    console.log('database error:', err)
    return new ApolloError('database error')
  }
}
