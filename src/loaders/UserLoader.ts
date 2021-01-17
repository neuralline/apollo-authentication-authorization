import {IUser} from 'src/custom'
import User from '../models/User'
import DataLoader from 'dataLoader'

type BatchUsers = (ids: string[]) => Promise<IUser[]>

const batchUsers: BatchUsers = async ids => {
  const users = await User.find()

  return users
}

export const userLoader = () => new DataLoader<string, IUser>(batchUsers)
