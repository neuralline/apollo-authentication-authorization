import {secret_key} from './../config/secret'
import {IUser} from 'src/custom'

import jwt from 'jsonwebtoken'
const generateToken = (user: IUser): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    secret_key,
    {expiresIn: '1h'}
  )
}

export default generateToken
