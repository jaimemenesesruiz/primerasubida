let cursos = [{
        id: 1,
        nombre: 'Introduccion a node js',
        duracion: 120,
        valor: 0
    }, {
        id: 2,
        nombre: 'Introduccion a Angular2+',
        duracion: 90,
        valor: 100000
    },
    {
        id: 3,
        nombre: 'Angular 4+ Avanzado',
        duracion: 180,
        valor: 500000
    }
]


//let obtnerPromedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
//console.log(obtnerPromedio(cursos[0].duracion, cursos[1].duracion, cursos[2].duracion));

module.exports = {
    cursos
};