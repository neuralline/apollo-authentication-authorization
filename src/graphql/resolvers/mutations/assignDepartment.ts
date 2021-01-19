import Department from '../../../models/Department'
interface Input {
  id: string
  userId: string
}

export default async (_: any, {input}: {input: Input}) => {
  const assignDepartment = await Department.findByIdAndUpdate(
    {_id: input.id},
    {user: input.userId},
    {new: true}
  )

  //@ts-ignore

  return await assignDepartment.save()
}
