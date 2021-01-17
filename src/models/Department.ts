const {Schema, model} = require('mongoose')

const departmentSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: false
  }
})

export default model('department', departmentSchema)
