import User from '../../../models/User'
export default async (_: any, { input }: any) => {
  console.log('input', input)
  const assignRole = await User.findByIdAndUpdate(
    { _id: input.id },
    { role: input.role },
    { new: true }
  )

  //@ts-ignore

  return await assignRole.save()
}