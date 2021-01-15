const { Schema, model } = require('mongoose')

const departmentSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
})

export default model('department', departmentSchema)
