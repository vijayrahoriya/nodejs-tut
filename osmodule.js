const os = require('os');
// console.log(os.type())
// console.log(os.platform())
// console.log(os.arch())
// console.log((os.freemem())/1024 * 1024)
// console.log(os.totalmem())
// console.log(os.uptime())

const Emitter = require('events');
const myEmitter = new Emitter();
const express = require('express');
const app = express();

// myEmitter.on('eventName',(data)=>{
//     console.log(data)
// })

// myEmitter.emit('eventName',{
//     name: "vijay"
// })
let count = 0;

myEmitter.on('countAPI',()=>{
    count++
    console.log('hello event called', count)
})

app.get('/',(req,res)=>{
    res.send('api called')
    myEmitter.emit('countAPI')
})
app.get('/search',(req,res)=>{
    res.send('serach api called')
})
app.get('/update',(req,res)=>{
    res.send('update api called')
})

app.listen(5000)


//REPL - Read Eval Print Loop
// it is command line tool we can run node js and javascript code on it when we entered node in cmd than we entered in REPL and we can use javascript code 
