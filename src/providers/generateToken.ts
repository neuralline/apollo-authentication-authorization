import { IUser } from 'src/custom'

const jwt = require('jsonwebtoken')
const generateToken = (user: IUser) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    'someverysecretkey',
    { expiresIn: '1h' }
  )
}

export default generateToken
