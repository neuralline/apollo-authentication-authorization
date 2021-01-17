import User from '../../../models/User'
import authenticatedFields from '../../../providers/authenticatedFields'
import isAuth from '../../../providers/isAuth'
import {IUser} from './../../../custom.d'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, req: any, context: any) => {
  const users: any = await User.find()

  console.log('...users._docs', users)

  const {currentUser} = isAuth(context)
  const newUser: IUser[] = [...users]

  return authenticatedFields(initialUserValue, newUser, currentUser)
}
