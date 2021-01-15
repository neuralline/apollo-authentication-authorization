import { UserInputError, ValidationError } from 'apollo-server'
import bcrypt from 'bcrypt'
import { IError } from './../../../custom.d'
import generateToken from '../../../providers/generateToken'
import User from '../../../models/User'
export default async (_: any, { id, email, password }: any) => {
  console.log('user login - ', id, email, password)
  const errors: IError = {}
  try {
    if (!email) throw new UserInputError('Errors', { errors: 'email problem' })
    if (!password)
      throw new UserInputError('Errors', { errors: 'password problem' })

    const user: any = await User.findOne({ email })

    if (!user) {
      errors.general = 'User not found'
      throw new UserInputError(errors.general, { errors })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      errors.general = 'Wrong credentials'
      throw new UserInputError(errors.general, { errors })
    }

    const token = generateToken(user)
    return token
  } catch (err) {
    console.log('error @login: ', err)
    errors.general = 'major malfunction'
    throw new ValidationError('major malfunction')
  }
}
