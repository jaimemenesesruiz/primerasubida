const { cursos } = require('./cursos');
const fs = require('fs');
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombreInteresado: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true, //obligatorio
        alias: 'c'
    }
}
const argv = require('yargs')
    .command('inscribir', 'Inscribir curso', opciones)
    .argv
let estudiante = cursos[0];
const mostarCurso = (i, callback) => {
    setTimeout(function() {
        console.log('Id: ' + cursos[i].id);
        console.log('Nombre: ' + cursos[i].nombre);
        console.log('Duracion: ' + cursos[i].duracion);
        console.log('Valor: ' + cursos[i].valor);
        callback(i);
    }, 2000);
}
let mostarCursosRecusivo = (index) => {
    mostrarCursos(index);
}
let mostrarCursos = (index) => {

    console.log('----------------------------');
    if (index < cursos.length) {
        mostarCurso(index, function(i) {
            if (i < cursos.length) {
                mostarCursosRecusivo(i + 1);
            }
        });
    }
}

//mostrarCursos(0);

let crearArchivo = (curso, nombreInteresado, cedula) => {
    texto = 'El nombre del interesas es: ' + nombreInteresado + '\n' + 'Numero de cedula: ' + cedula +
        '\n' + 'Curso: ' + '\n' + 'id: ' + curso.id + '\n' + 'Nombre: ' + curso.nombre +
        '\n' + 'Duracion: ' + curso.duracion + '\n' + 'Valor: ' + curso.valor;
    fs.writeFile('inscripcion.txt', texto, (err) => {
        if (err) throw (err);
        console.log('Inscripción realizada');

    });
}

let manejar = () => {
    let id = null;
    if (argv.id) {
        id = argv.id;
    } else {
        id = null;
    }
    let curso = cursos.find(function(course) {
        return course.id == id;
    })
    if (!curso) {
        console.log('Curso no encontrado');
    }
    if (argv._[0] == 'inscribir' && curso) {
        console.log('Id: ' + curso.id);
        console.log('Nombre: ' + curso.nombre);
        console.log('Duracion: ' + curso.duracion);
        console.log('Valor: ' + curso.valor);
        crearArchivo(curso, argv.n, argv.c)
    } else {
        mostrarCursos(0);
    }
}
manejar();
//crearArchivo(estudiante);