// Opciones para ingresar la tarea:
//Utilizando argv:
const tareas = require('./tareas.js');

let funcion = process.argv[2], 
    tarea = process.argv[3], 
    repo = process.argv[4], 
    autor = process.argv[5];

const operar = () => {
    if (!funcion) return console.log('Por favor escriba alguna de las siguientes funciones: \n Lista de funciones:\n  -crear\n  -listar\n  -filtrar');

    switch (funcion){
    case 'crear':
        if (!tarea && !repo) return console.log('Por favor la función "crear" necesita de tres parámetros: tarea, repositorio y autor.');

        const objeto = {
            tarea,
            repo, 
            autor
        }
        tareas.escribirJSON(objeto);
        console.log(`La tarea '${tarea}' fue creada`);
        break;

    case 'listar':
        tareas.mostrarTareas();
        break;
    
    case 'filtrar':
        autor = tarea;
        if (funcion === 'filtrar' && !autor) return console.log('Por favor la función "filtrar" necesita de un autor.');

        tareas.filtrarPorAutor(autor);
        break;
        
    default:
        console.log(`La función "${funcion}" no existe.`);
    }
}

operar();