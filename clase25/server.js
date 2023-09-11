const { Command } = require('commander')
const dotenv = require('dotenv')
const configFn = require('./config')

const program = new Command()

program
  .option('--mode <mode>', 'Modo de trabajo', 'local')

program.parse()

const options = program.opts()

dotenv.config({
  path: `.env.${options.mode}`
})

console.log({ options })

const config = configFn()

const CONNECTION_STRING = `mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`

console.log(`Conectandose a ${CONNECTION_STRING}`)