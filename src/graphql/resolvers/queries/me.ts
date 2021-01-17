import isAuth from '../../../providers/isAuth'
import {initialUserValue} from './../../../util/initial'

export default async (_: any, req: any, context: any) => {
  try {
    const {currentUser} = isAuth(context)

    if (!currentUser) {
      return {...initialUserValue}
    }
    return {...currentUser}
  } catch (err) {
    console.log(err)
    return {...initialUserValue}
  }
}
