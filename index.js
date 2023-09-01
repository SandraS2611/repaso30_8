//const os = require('node:os')

//console.log(os.arch());//x64

//console.log(os.platform());//win32

//console.log(os.cpus());//model Intel ...

//MODULOS NATIVOS 1 FORMA CON CALLBACKS
// const { isUtf8 } = require('node:buffer')
// const fs = require('node:fs')

// fs.readFile('./test.txt', 'utf-8', (error, data) => {
// if (error) {
    // console.log("hubo un error");
    // return
// }
// console.log(data);
// })

// fs.writeFile('./test2.txt', "Test 2!!!!", (err) => {
    // if (err) {
        // console.log("Hubo un error");
    // }

// })

//2 FORMA CON PROMISES
const fs = require('node:fs/promises')

fs.readFile('./test.txt', 'utf-8') 
.then((data) => {
    console.log(data);
})

fs.writeFile('./test2.txt', "Test 2!!!!")
.catch(err => console.log(err))