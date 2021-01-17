import {IUser} from './../../../custom.d'
import {ApolloError} from 'apollo-server'
import Department from '../../../models/Department'

interface IInput {
  input: IUser
}
export default async (_: any, {input}: IInput) => {
  try {
    // const { id, username, userId } = isAuth(context)
    //TODO: username and created by miss match
    const newDepartment = new Department({
      name: input.name
    })

    const department = await newDepartment.save()
    return department
  } catch (err) {
    console.log('error @createDepartment: ', err)
    throw new ApolloError(err)
  }
}
