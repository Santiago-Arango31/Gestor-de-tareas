const inquirer = require('inquirer')
require('colors')

const preguntas = [{
    type: 'list',
    name: 'option',
    message: ' What will you to do? ',
    choices: [
        {
            value: '1',
            name: `${ '1'.blue } Create a new task`
        }, {
            value: '2',
            name:  `${ '2'.blue } List all tasks` 
        }, {
            value: '3',
            name: `${ '3'.blue } List completed tasks`
        }, {
            value: '4',
            name: `${ '4'.blue} List unfinished tasks` 
        }, {
            value: '5',
            name: `${ '5'.blue } Complete task(s)`
        }, {
            value: '6',
            name: `${ '6'.blue } Delete task`
        }, {
            value: '0',
            name: `${ '0'.blue } Exit` 
        }
    ]
}]

const pausa = [{
    type : 'input',
    name : 'dalay',
    message : ` Please press ${ 'ENTER'.blue} to continue `,
}]



const inquirerMenu = async () => {
    console.clear()
    console.log('------------------------------------'.blue)
    console.log('            Select an option        '.blue)
    console.log('------------------------------------\n'.blue)

    const {option} = await inquirer.prompt(preguntas)
    return option
}

const inquirerDalay = async () => {
    const {dalay} = await inquirer.prompt(pausa)
    return dalay
}

const inquirerInput = async (message) => {
    const question = [{
        type : 'input',
        name : 'desc',
        message,
        validate (value){
            if(value.length != 0){
                return true
            } else {
                return ' Plese insert any value '
            }
        }
    }]
    const {desc} = await inquirer.prompt(question)
    return desc
}

const inquirerDeleteAnyTask = async (task) => {
    const choices = task.map( (tarea,i) => {
        return {
            value: tarea.id,
            name: `${((i+1) + '.').green} ${tarea.descripcion}`
        }
    })

    choices.unshift({
        value:'0',
        name:`${'0.'.green} Cancel`
    })

    const question = [{
        type: 'list',
        name: 'id',
        message: ' Sure you want to delete? ',
        choices: choices
    }]

    const {id} = await inquirer.prompt(question)
    return id
}

const InquirerConfirm = async (message) => {
    const question = [{
        type:'confirm',
        name:'ok',
        message
    }]
    const {ok} = await inquirer.prompt(question)
    return ok
}

module.exports = { inquirerMenu, inquirerDalay, inquirerInput, inquirerDeleteAnyTask, InquirerConfirm }
