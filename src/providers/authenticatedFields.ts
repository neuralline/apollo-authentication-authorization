import { IUser } from '../custom'
const authenticatedFields = (user: IUser, role: string): IUser => {
  const initialUserValue = {
    id: 'unknown',
    name: null,
    role: 'USER',
    email: null,
    phone: null
  }

  try {
    return role === 'USER'
      ? { ...initialUserValue, ...user, role: null, department: null }
      : { ...user }
  } catch (error) {
    return { ...initialUserValue }
  }
}
export default authenticatedFields
