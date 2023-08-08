const { Schema, model } = require('mongoose')

const studentSchema = Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: Schema.Types.ObjectId,
          ref: 'courses'
        }
      }
    ],
    default: []
  }
})

studentSchema.pre('findOne', function () {
  this.populate('courses.course')
})

module.exports = model('students', studentSchema)

/**
 * 
{
  "first_name": "Iram",
  "last_name": "Gutiérrez",
  "email": "iram@mail.com",
  "gender": "M",
  "courses": [
    {
      "course": ObjectId("dsfasdfasdfasdfafsd")
    }
  ]
}
 * 
 */

