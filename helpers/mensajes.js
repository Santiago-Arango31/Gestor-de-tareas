require('colors')

const mostrarMenu = () => {
    console.clear()
    return new Promise(resolve => {
        console.log('------------------------------------'.blue)
        console.log('        Seleccione una opción       '.blue)
        console.log('------------------------------------\n'.blue)
        console.log(`   ${'1'.blue} Crear nueva tarea`)
        console.log(`   ${'2'.blue} Listar todas las tareas`)
        console.log(`   ${'3'.blue} Listar tareas completadas`)
        console.log(`   ${'4'.blue} Listar tareas pendientes`)
        console.log(`   ${'5'.blue} Completar tarea(s)`)
        console.log(`   ${'6'.blue} Borrar tarea`)
        console.log(`   ${'0'.blue} Salir`)


        // 2 Configurar la interaccion del usuario
        // 2.1 Prepara la interfaz del usuario
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // 2.2
        readLine.question('Seleccione una opcion : ', (opt) => {
            readLine.close()
            resolve(opt)
        })
    })

}

const pausa = () => {
    
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // 2.2
        readLine.question(`\nPresione ${'Enter'.green} para continuar `, (opt) => {
            readLine.close()
            resolve()
        })
    })
    
}

module.exports = { mostrarMenu, pausa }