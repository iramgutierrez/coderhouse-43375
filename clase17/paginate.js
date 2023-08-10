const mongoose = require('mongoose')
const userModel = require('./models/userModel')

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase16-test?retryWrites=true&w=majority'

;(async () => {
  await mongoose.connect(MONGODB_CONNECT)

  // const users = await userModel.find({}).limit(50).skip(5000) // (page - 1) * limit
  // const totalUsers = await userModel.countDocuments({ })
  const users = await userModel.paginate({ }, { limit: 50, page: 101 })

  console.log(users)
})()