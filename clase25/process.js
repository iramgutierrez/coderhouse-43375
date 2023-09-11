// console.log(process.argv.slice(2))

let mode = 'dev'

const modeFound = process.argv.slice(2).findIndex(arg => arg === '--mode')

if (modeFound !== -1) {
  mode = process.argv.slice(2)[modeFound + 1] || 'dev'
}

const MONGODB_CONNECT_PROD = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase15?retryWrites=true&w=majority'
const MONGODB_CONNECT_DEV = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster1.pzs2exz.mongodb.net/43375-clase15?retryWrites=true&w=majority'

console.log(`Ejecutando en modo ${mode}`)

process.on('uncaughtException', e => {
  process.exit(2)
  console.log('Excepción capturada')
})

process.on('exit', code => {
  console.log('finalizando proceso', code)
})

console('hola')


