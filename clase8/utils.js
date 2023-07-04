const multer = require('multer')

/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img')
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}-${new Date().toISOString()}`)
  }
})*/

const uploader = multer({ dest: 'uploads/' })

module.exports = uploader