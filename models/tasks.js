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
        for (let i = 1; i < this._listado.length + 1; i++) {
            console.log(` ${i.toString().green}. ${this._listado[i - 1].descripcion} :: ${this._listado[i - 1].completadoEn ? 'completado'.green : 'incompletado'.red} `)
        }
    }

    listCompletePendingTask(pending) {
        if (pending){
            for (let i = 1; i < this._listado.length + 1; i++) {
                if ( this._listado[i - 1].completadoEn == null  ) {
                    console.log(` ${i.toString().green}. ${this._listado[i - 1].descripcion} :: ${this._listado[i - 1].completadoEn ? 'completado'.green : 'incompletado'.red} `)
                }
            }
        } else {
            for (let i = 1; i < this._listado.length + 1; i++) {
                if ( this._listado[i - 1].completadoEn != null  ) {
                    console.log(` ${i.toString().green}. ${this._listado[i - 1].descripcion} :: ${this._listado[i - 1].completadoEn ? this._listado[i - 1].completadoEn.toString().green : 'incompletado'.red} `)
                }
            }
        }
        
    }

    crearTarea(descripcion) {
        const _tarea = new Task(descripcion)
        this._listado[_tarea['id']] = _tarea
    }

    deleteTareas(id = ""){
        console.log('delete task')

    }
}

module.exports = Tasks