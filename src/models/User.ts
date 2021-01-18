import {Schema, model} from 'mongoose'
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name should not be empty']
    },
    password: {
      type: String,
      required: [true, 'Please provide your password']
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'email address is required'],
      validate: {
        validator: email => emailRegex.test(email),
        message: 'must be a valid email address'
      }
    },

    phone: {
      type: String,
      trim: true
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: 'department'
    },
    role: {
      type: String,
      required: [true, 'User role should not be empty'],
      enum: ['USER', 'ADMIN']
    }
  },
  {timestamps: true}
)

export default model('user', userSchema)
