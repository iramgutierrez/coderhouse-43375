const mongoose = require('mongoose')
const studentModel = require('./models/studentModel')
const courseModel = require('./models/courseModel')

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase16-populate?retryWrites=true&w=majority'

mongoose.connect(MONGODB_CONNECT)
  .then(async _ => {
    console.log('conectado a la base de datos')

    const martin = await studentModel.findOne() // .populate('courses.course')

    /*const firstCourse = await courseModel.findOne()

    martin.courses.push({ course: firstCourse._id })

    await studentModel.updateOne({ _id: martin._id }, martin)*/

    console.log({ martin: JSON.stringify(martin, null, 2) })

    /*return courseModel.create({
      title: 'Backend',
      description: 'Programación Backend con Node.js',
      difficulty: 6,
      topics: ['Javascript', 'Node', 'express', 'MongoDB'],
      professor: 'Iram Gutiérrez'
    })*/

    /*return studentModel.create({
      "first_name": "Martin",
      "last_name": "Prado",
      "email": "martin@mail.com",
      "gender": "M"
    })*/

  })
  .catch((error) => console.log(error))