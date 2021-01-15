import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true
  },
  department: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true,
    required: true
  }
})

export default model('user', userSchema)
