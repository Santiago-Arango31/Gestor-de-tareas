require('colors')
const { inquirerMenu, inquirerDalay, inquirerInput, inquirerDeleteAnyTask } = require('./helpers/inquirer');
const { saveData, readDataBase } = require('./helpers/savaData');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
    let opt = ''
    const tareas = new Tasks()
    const tareasBD = readDataBase();
    (tareasBD) ? (tareas.loadTaskFromDB(tareasBD)) : null;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                let desc = await inquirerInput(` ${'Write the description'.blue} of the task, to continue `);
                tareas.crearTarea(desc)
                break;
            case '2':
                // console.log(tareas.listadoArray)
                tareas.listAllTask(tareas.listadoArray)
                break;
            case '3':
                tareas.listCompletePendingTask(false)
                break;
            case '4':
                tareas.listCompletePendingTask(true)
                break;
            case '5':

                break;
            case '6':
                let aux = await inquirerDeleteAnyTask(tareas.listadoArray)
                console.log(aux)
                break;
        }
        saveData(tareas.listadoArray)
        if (opt != '0') await inquirerDalay();
    } while (opt != '0');
}

main()