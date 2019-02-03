//EL module: se crea de forma automatica
///El yargs es una libreria que sirve para pasar parametros desde la linea de comandos
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);//Este obtiene todo los comandos que estan solos

let comando =argv._[0];//este es para hacer referencia al arreglo

switch (comando) {
  case 'listar':
        listarTabla(argv.base, argv.limite)
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${ archivo.cyan }`.magenta))
        .catch(e => console.log(e));
        //console.log('crear');
    break;
  default:
    console.log('Comando no reconocido');

}
//console.log(argv);
