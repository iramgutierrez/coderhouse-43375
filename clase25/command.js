const { Command } = require('commander')

const program = new Command()

program
  .option('-d', 'Modo debug', false)
  .option('-p <port>', 'Puerto de escucha', 8080)
  .option('--jwt-secret <port>', 'JWT Secret', 8080)
  .option('--mode <mode>', 'Modo de trabajo', 'production')
  .requiredOption('-u <user>', 'Usuario', 'Debes indicar un error')
  .option('-l, --letters [letters...]', 'specify letters')


const options = program.opts()

const debug = (string) => {
  if (options.d) {
    console.log('custom log: debug', string)
  }
  
}

program.parse()


debug(options)
debug(program.args)