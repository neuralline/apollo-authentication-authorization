import {ApolloError} from 'apollo-server'
import Department from '../../../models/Department'
import isAuth from '../../../providers/isAuth'
import {initialUserValue} from '../../../util/initial'
import {IContext} from './../../../custom.d'

export default async (_: any, req: any, context: IContext) => {
  try {
    const {isAuthenticated} = isAuth(context)
    if (!isAuthenticated) return initialUserValue
    const departments: any = await Department.find().populate('user')

    console.log(departments)
    return departments
  } catch (err) {
    console.log('database error:', err)
    return new ApolloError('database error')
  }
}
