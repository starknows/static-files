import * as fs from 'fs'

const menu = {}

fs.readdir("./", (err, files)=>{
    if(files&&files.length > 0) {
        files.forEach(async file => {
            if(!file.includes('.')) {
                menu[file] = []
            }
        })
    }
})