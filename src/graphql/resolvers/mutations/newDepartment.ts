import {ApolloError} from 'apollo-server'
import Department from '../../../models/Department'

interface Input {
  input: {
    title: string
    userId: string
  }
}
export default async (_: any, {input}: Input) => {
  try {
    // const { id, username, userId } = isAuth(context)
    //TODO: username and created by miss match
    const newDepartment = new Department({
      title: input.title,
      user: input.userId
    })

    const department = await newDepartment.save()
    return department
  } catch (err) {
    console.log('error @createDepartment: ', err)
    throw new ApolloError(err)
  }
}
