import {IContext} from './../../../custom.d'
import isAuth from '../../../providers/isAuth'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, req: any, context: IContext) => {
  try {
    const {currentUser} = isAuth(context)

    if (!currentUser) {
      return {...initialUserValue, name: 'not logged in'}
    }
    return {...currentUser}
  } catch (err) {
    console.log(err)
    return {...initialUserValue}
  }
}
