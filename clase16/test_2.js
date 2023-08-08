const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userId: String,
  username: {
    type: String,
    index: true
  },
  email: String,
  avatar: String,
  password: String,
  birthdate: Date,
  registeredAt: Date
})

const userModel = mongoose.model('users', userSchema)

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase16-test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_CONNECT)
  .then(async _ => {
    console.log('conectado a la base de datos')
    const response = await userModel.find({ username: 'Etha25' }).explain('executionStats')
    console.log(response)

  })
  .catch((error) => console.log(error))

  const users = [
    {
      _id: ObjectId("64c99c000cee659ea867b313"),
      userId: '9b1a3cd8-96fa-45e2-a3a5-09ec8fd1536c',
      username: 'Phoebe59',
      email: 'Clay_Bahringer40@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/16119529',
      password: '4yGuLUNeLOKn5Og',
      birthdate: ISODate("1954-09-08T23:34:35.781Z"),
      registeredAt: ISODate("2022-09-26T05:00:02.386Z"),
      __v: 0
    },
    {
      _id: ObjectId("64c99c000cee659ea867b315"),
      userId: '06c07721-4e5e-4154-b2c5-98e53302ad3c',
      username: 'Fermin_Rodriguez',
      email: 'Brody.Tremblay@yahoo.com',
      avatar: 'https://avatars.githubusercontent.com/u/83053911',
      password: 'P4eo6efOoIalYJ1',
      birthdate: ISODate("1957-02-05T00:32:26.450Z"),
      registeredAt: ISODate("2023-03-04T20:20:29.014Z"),
      __v: 0
    },
    {
      _id: ObjectId("64c99c000cee659ea867b317"),
      userId: '82e0d76c-81a2-405e-a909-2a2e49a2b11e',
      username: 'Shannon_Bartoletti',
      email: 'Christine95@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg',
      password: 'lxXENMXSKAjWg7o',
      birthdate: ISODate("2000-09-22T00:27:44.058Z"),
      registeredAt: ISODate("2022-11-06T19:23:19.647Z"),
      __v: 0
    },
    {
      _id: ObjectId("64c99c000cee659ea867b319"),
      userId: 'b1dc11e0-27dd-410a-a14b-66ba1b985f6e',
      username: 'Ryleigh.Kertzmann-Lesch',
      email: 'Sean.Tillman@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg',
      password: 'zV1B2kwANtzljA8',
      birthdate: ISODate("2004-05-31T01:10:12.409Z"),
      registeredAt: ISODate("2023-02-14T13:45:24.523Z"),
      __v: 0
    },
    {
      _id: ObjectId("64c99c000cee659ea867b31b"),
      userId: '7669175d-0f5f-41bd-bd44-1fa3ab14651a',
      username: 'Toney_Deckow',
      email: 'Travon55@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/64033232',
      password: '78yoC6bAL5xOQNd',
      birthdate: ISODate("1973-09-02T23:47:58.529Z"),
      registeredAt: ISODate("2023-07-20T09:57:38.805Z"),
      __v: 0
    },
    {
      _id: ObjectId("64c99c000cee659ea867b31d"),
      userId: 'd4f1bbb2-1ff1-41ad-8569-7b4b1ae08433',
      username: 'Etha25',
      email: 'Esperanza_Conroy@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/19135766',
      password: 'kVA5GDDy4rVuaYq',
      birthdate: ISODate("1966-01-04T01:27:09.764Z"),
      registeredAt: ISODate("2022-09-27T04:35:26.704Z"),
      __v: 0
    }
  ]

  //const usersMatched = users.filter(user => user.username === 'Etha25')


  const usersIndexes = {
    'Phoebe59': ObjectId("64c99c000cee659ea867b313"),
    'Fermin_Rodriguez': ObjectId("64c99c000cee659ea867b315"),
    'Etha25': ObjectId("64c99c000cee659ea867b31d")
  }

  const indexMatched = usersIndexes['Etha25']

  db.users.findOne({ _id: indexMatched })






