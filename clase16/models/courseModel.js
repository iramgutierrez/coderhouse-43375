const { Schema, model } = require('mongoose')

const courseSchema = Schema({
  title: String,
  description: String,
  difficulty: Number,
  gender: String,
  topics: {
    type: Array,
    default: []
  },
  professor: String,
  students: {
    type: Array,
    default: []
  },
})

module.exports = model('courses', courseSchema)

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

