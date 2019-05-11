const argv = require('./config/yargs').argv
const colors = require('colors')

const { createFile, listTable } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch( comando ) {
  case 'listar':
    listTable(argv.base, argv.limite)
  break
  case 'crear':
    createFile(argv.base, argv.limite)
      .then(file => console.log(`Archivo creado`, colors.green(file)))
      .catch(err => console.log(err))
  break

  default:
    console.log('Comando no reconocido')

}
// console.log(argv.base)
// console.log(argv)
// let param = argv[2]

// let base = param.split('=')[1]
