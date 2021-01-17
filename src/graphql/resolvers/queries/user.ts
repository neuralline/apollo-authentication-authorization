import User from '../../../models/User'
import authenticatedFields from '../../../providers/authenticatedFields'
import isAuth from '../../../providers/isAuth'
import {IUser} from './../../../custom.d'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, {id}: {id: string}, context: any) => {
  const user: any = await User.findOne({_id: id})

  const {currentUser} = isAuth(context)
  const newUser: IUser[] = [user]

  return authenticatedFields(initialUserValue, newUser, currentUser)[0]
}
