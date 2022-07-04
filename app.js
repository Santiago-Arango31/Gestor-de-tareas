require('colors')
const { inquirerMenu, inquirerDalay, inquirerInput, inquirerDeleteAnyTask, InquirerConfirm, inquirerSelectMultiTask } = require('./helpers/inquirer');
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
                let selectedTasks = await inquirerSelectMultiTask(tareas.listadoArray)
                if (selectedTasks != 0){
                    tareas.updateTareas(selectedTasks)
                }
                break;
            case '6':
                let auxId = await inquirerDeleteAnyTask(tareas.listadoArray)
                if (auxId != 0){
                    let confirm = await InquirerConfirm('Are you sure?');
                    console.log(confirm)
                    if (confirm){
                        tareas.deleteTareas(auxId)
                    }
                }
                break;
        }
        saveData(tareas.listadoArray)
        if (opt != '0') await inquirerDalay();
    } while (opt != '0');
}

main()