const opts = {
    base: {
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv = require('yargs')
                    .command('listar','Imprimer en consola la tabla de multiplicar',opts)
                    .command('crear','Crea un archivo con las multiplicaciones',opts)
                    .help()
                    .argv;


module.exports = {
    argv
}