const fs = require('fs');

const guardarTarea = (datoAConvertir) => {
    const datoJSON = JSON.stringify(datoAConvertir, null, 4);
    fs.writeFileSync('./tareas.json', datoJSON, null, 4);
};

const leerJSON = () => {
    const databaseJSON = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(databaseJSON);
}

// const leerPorEstado = (estado) => 

const escribirJSON = (objTarea) => {
    const tareasLeidas = leerJSON();
    tareasLeidas.push(objTarea);
    guardarTarea(tareasLeidas);
};

const filtrarPorAutor = (autor) => {
    const tareasLeidas = leerJSON();
    const filtro = tareasLeidas.filter(valor => valor.autor === autor);
    return console.log(filtro);
}


const mostrarTareas = () => leerJSON().forEach((value) => console.log(value));


module.exports = {mostrarTareas, escribirJSON, filtrarPorAutor};


