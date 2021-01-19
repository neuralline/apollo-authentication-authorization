import {Schema, model} from 'mongoose'

const departmentSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Department title is required']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

export default model('department', departmentSchema)
