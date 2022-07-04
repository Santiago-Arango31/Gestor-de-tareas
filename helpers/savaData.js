const fs = require("fs")
const archive = './db/data.json'

const saveData = (data) => {
    fs.writeFileSync(archive,JSON.stringify(data))
}

const readDataBase = () => {
    if (!fs.existsSync(archive)){
        return null;
    }
    const information = fs.readFileSync(archive,{encoding:'utf-8'})
    return (JSON.parse(information));
}
   
module.exports = { saveData, readDataBase }