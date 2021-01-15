import { ApolloError } from 'apollo-server'
import Department from '../../../models/Department'
export default async (_: any, { input }: any) => {
  try {
    // const { id, username, userId } = isAuth(context)
    //TODO: username and created by miss match
    const newDepartment = new Department({
      id: input.id,
      name: input.name
    })

    const department = await newDepartment.save()
    return department
  } catch (err) {
    console.log('error @createDepartment: ', err)
    throw new ApolloError(err)
  }
}
