

module.exports = () => ({
  db_user: process.env.DB_USER || 'IRAM',
  db_host: process.env.DB_HOST || 'IRAM',
  db_password: process.env.DB_PASSWORD || 'IRAM',
  db_name: process.env.DB_NAME || 'IRAM'
})