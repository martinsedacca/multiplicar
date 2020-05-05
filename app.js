//required
const argv = require('./config/yargs').argv;
const colors = require('colors');

// const express = require('express');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
    .then(archivo=> console.log('Se guardó el archivo ' + archivo.green))
    .catch(e => console.log(e));
    break;

    default:
        console.log('comando no reconocido');

}


// let base = 7;

// console.log(module);
// // console.log(multiplicar);



// let argv2 = process.argv;

// console.log('Limite',argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// console.log(parametro);
// let base = argv.base;


// 
