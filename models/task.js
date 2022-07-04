const { v4 : uuidv4 } = require('uuid')

class Task {
    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion){
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null
    }
}

module.exports = Task