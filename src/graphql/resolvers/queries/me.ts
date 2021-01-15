import isAuth from '../../../providers/isAuth'

export default async (_: any, r: any, context: any) => {
  const initialUserValue = {
    id: 'null',
    name: null,
    role: null,
    email: null,
    phone: null
  }
  try {
    //console.log('arg ----------------------------', context.req)

    const { currentUser } = isAuth(context)

    if (!currentUser) {
      return { ...initialUserValue }
    }
    return { ...currentUser }
  } catch (err) {
    console.log(err)
    return { ...initialUserValue }
  }
}
