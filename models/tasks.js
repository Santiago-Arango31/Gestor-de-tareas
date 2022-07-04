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
            console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? 'completado'.green : 'incompletado'.red} `)
        });

    }

    listCompletePendingTask(pending) {
        if (pending) {
            this._listado.forEach((element, index) => {
                if (element.completadoEn == null) {
                    console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? 'completado'.green : 'incompletado'.red} `)
                }
            })
        } else {
            this._listado.forEach((element, index) => {
                if (element.completadoEn != null) {
                    console.log(` ${index.toString().green}. ${element.descripcion} :: ${element.completadoEn ? element.completadoEn.toString().green : 'incompletado'.red} `)
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
}

module.exports = Tasks