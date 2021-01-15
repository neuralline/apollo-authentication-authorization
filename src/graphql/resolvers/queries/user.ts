import authenticatedFields from '../../../providers/authenticatedFields'
import isAuth from '../../../providers/isAuth'
import User from '../../../models/User'

export default async (_: any, { id }: any, context: any) => {
  const user: any = await User.findOne({ _id: id })

  const { currentUser } = isAuth(context)
  console.log('currentUser --', currentUser)

  const role = currentUser.role || 'USER'

  return authenticatedFields(user._doc, role)
}
