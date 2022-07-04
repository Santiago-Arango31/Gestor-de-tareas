const Task = require("./task")
require('colors')

class Tasks {
    _listado = {}

    get listadoArray() {
        const listado = []
        Object.keys(this._listado).forEach(
            key => {
                listado.push(this._listado[key])
            }
        )
        return listado;
    }

    constructor() {
        this._listado = {}
    }

    loadTaskFromDB(tareas = []) {
        this._listado = tareas
    }

    listAllTask() {
        this._listado.forEach((element, index) => {
            console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? 'completed'.green : 'unfinished'.red} `)
        });

    }

    listCompletePendingTask(pending) {
        if (pending) {
            this._listado.forEach((element, index) => {
                if (element.completadoEn == null) {
                    console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? 'completed'.green : 'unfinished'.red} `)
                }
            })
        } else {
            this._listado.forEach((element, index) => {
                if (element.completadoEn != null) {
                    console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? new Date(element.completadoEn).green : 'incompletado'.red} `)
                }
            })
        }

    }

    crearTarea(descripcion) {
        const _tarea = new Task(descripcion)
        this._listado[_tarea['id']] = _tarea
    }

    deleteTareas(id) {
        this._listado.forEach((element, index) => {
            if (id == element.id) {
                delete this._listado[index];
                console.log(` ${'Task deleted'.blue} `)
            }
        });
    }

    updateTareas(arrayId = []) {
        this._listado.forEach((element, index) => {
            if (arrayId.includes(element.id)) {
                if (!element.completadoEn) {
                    element.completadoEn = new Date().toISOString()
                }
            } else {
                element.completadoEn = null
            }
        });
    }
}

module.exports = Tasks