import {UserInputError} from 'apollo-server'
import bcrypt from 'bcrypt'
import User from '../../../models/User'
import {IUser} from './../../../custom.d'
interface IInput {
  input: IUser
}

export default async (_: any, {input}: IInput) => {
  try {
    //simple validation

    const {email, phone, name} = input
    if (!email) {
      throw new UserInputError('Invalid input')
    }
    // TODO: Make sure user doesn't already exist
    const user = await User.findOne({email})
    if (user) {
      //throw new UserInputError('email address not available')
      return {
        id: 'unknown',
        success: false,
        message: 'user already exist'
      }
    }
    // hash password and create an auth token
    const password = (await bcrypt.hash(input.password, 12)) || ''

    const newUser: any = new User({
      email,
      phone,
      name,
      password,
      role: 'USER'
    })

    //create user account
    const res = await newUser.save()
    return {
      //@ts-ignore
      ...res._doc,
      id: res._id,
      success: true
    }
  } catch (err) {
    console.log('error @register: ', err)
    return {
      id: 'unknown',
      success: false
    }
  }
}
