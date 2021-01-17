import {IUser} from './../custom.d'

interface SUser extends IUser {
  _doc?: IUser
  _id?: string
}

const authenticatedFields = (
  initialState: IUser,
  users: IUser[],
  currentUser: IUser
): IUser[] => {
  try {
    const rule =
      currentUser.role === 'USER'
        ? {role: null, department: null, password: ''}
        : {password: ''}
    const serialisedFields: IUser[] = users.map((user: SUser) => {
      return {id: user._id, ...user._doc, ...rule}
    })
    return serialisedFields
  } catch (error) {
    return [{...initialState}]
  }
}
export default authenticatedFields
