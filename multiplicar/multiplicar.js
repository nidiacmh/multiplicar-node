// se agregan todos los requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite = 10) => {
  console.log('================='.green);
  console.log(`====tabla de ${base}===`.green);
  console.log('================='.green);
  for(let i = 1; i<= limite; i++){
    console.log(`${base} * ${i} = ${ base * i }`)
  }




}

//const fs = require('express'); no existe en la documentacion, es un paquete que se instala, son expansiones no son nativos de node
//const fs = require('./fs');son archivos que nosotros mismos escribimoe y deben estar en nuestro proyecto

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)){
      reject(`El valor introducido -- ${base} -- no es un numero`);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++){
      data += `${ base } * ${ i } = ${ base * i}\n`;
      //console.log(base + " * " + i + " = " + i * base);
    };


    fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
      if (err)
        reject (err)
      else
        resolve(`tabla-${base}.txt`);
    });

  });

}

//El modulo es la parte en la que se guardan todas las funciones que se van a exportar
module.exports = {
  crearArchivo,
  listarTabla
}
