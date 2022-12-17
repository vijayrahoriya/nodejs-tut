// const http = require('http');
// const data = require('./data');

// http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type' : 'application\json'
//     })
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(5000,()=>{
//     console.log('Server createdn')
// })

// how to create a file with input and delete file with input 
// console.log(process);  //it is large module
// console.log(process.argv);  //it will give a array of lenght 2

// const fs = require('fs');
// const input = process.argv;
// // // fs.writeFileSync(input[2],input[3])
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]== 'remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('invalid data')
// }


// show file list with file system 
// how to creat a file in a folder by fs module 
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'file');
// console.warn(dirpath)

// // how to creat files with loop 
// for(let i = 0; i<5; i++){
//     fs.writeFileSync(dirpath+'/hello'+i+'.txt','this is an simple file')
// }

// fs.readdir(dirpath,(err,data)=>{
//     console.log(data)
//     console.log(err)
// })
// fs.readdir(dirpath,(err,data)=>{
//     data.forEach((item)=>{
//         console.log(item)
//     })
// })


// CURD with file system 
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,"crud");
// const filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(filepath,'This is simple text file')
// fs.readFile(filepath,(err,data)=>{
//     console.log(err,data)// ---> Buffer me data aayega
// // })
// fs.readFile(filepath,"utf8",(err,data)=>{
//     console.log(err,data)
// })

// Update a file text 
// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//     if(!err){
//         console.log('File is updated')
//     }
// })

// Rename a file 
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log('Renamed')
//     }
// })

// Delete a file 
// fs.unlinkSync(`${dirpath}/fruit.txt`)


// nodejs is a async and single thread system 
// async --> it does not wait next function that it resolve or not it runs without wait
// console.log('start exec')
// setTimeout(() => {
//     console.log('logic exec')
// }, 2000);
// console.log('complete exec')
// let a = 10;
// let b = 0;
// setTimeout(() => {
//     b = 10
// }, 2000);       //yaha jo problem aayegi use promise se solve kar skte hai settimeout ko promise me dal skte hai

// console.log(a+b)
// let pro = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(30)
//     }, 2000);
// }).then((data)=>{
//     console.log(a+data)
// })

// how node js work 
// console.log('starting up ');  //call stack me jayega 

// setTimeout(()=>{
//     console.log('2 second late')   //API me jayega phir callback queue me jayega phir stack empty ho jayega to yah run hoga
// },2000)
// setTimeout(()=>{
//     console.log('0 second late')   //API me jayega phir callback queue me jayega phir stack empty ho jayega to yah run hoga
// },0)

// console.log('finishing up');  //call stack me jayega



// express js starts 
// const { query } = require('express');
// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     console.log('data sent by browser', req.query.name)
//     res.send('This is home page')
// })
// app.get('/about',(req,res)=>{
//     res.send('This is about page')
// })

// app.listen(5000)

// html and json data rendering 
// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     res.send('<h1>Hello this is hoem page</h1>')
// })
// app.get('/about',(req,res)=>{
//     res.send(`<input type="text" placeholder="Enter Your Name"><a href="/">Go to Home Page</a>`)
// })
// app.get('/help',(req,res)=>{
//     res.send({
//         name: 'vijay'
//     })
// })

// app.listen(5000)

// how to render html pages 
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicpath = path.join(__dirname,'public');

// app.use(express.static(publicpath));

// app.listen(5000)

// how to remove file extension name from url 
// const express = require('express');
// const app = express();
// const path = require('path')
// const publicpath = path.join(__dirname,'public');


// app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`)
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`)
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicpath}/error.html`)
// })

// app.listen(5000)

// template Engine for dynamic files 
// const express = require('express');
// const app = express();

// app.set('view engine','ejs');
// // then directory me views folder create kare and us me ejs file banaye 
// app.get('/profile',(req,res)=>{
//     // for sending data 
//     const data = {
//         name : 'vijay',
//         city : 'jaipur',
//         skills: ['HTML','CSS','JavaScript']
//     }
//     res.render('profile',{data})
// })

// app.get('/login',(req,res)=>{
//     res.render('login')
// })


// app.listen(5000)


// use middlewares 
// const express = require('express');
// const app = express();

// const reqFilter = (req,res,next)=>{
//     // console.log('this is middleware');
//     if(!req.query.age){
//         res.send('Please provide age')
//     }
//     else if(req.query.age < 18){
//         res.send("You can't acces this page")
//     }
//     else{
//         next();
//     }
// }

// // app.use(reqFilter);

// app.get('',(req,res)=>{
//     res.send('Welcome to Home page')
// })
// // app.get('/users',reqFilter,(req,res)=>{
// //     res.send('Welcome to Users page')
// // })
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('Welcome to Users page')
// })
// app.get('/about',(req,res)=>{
//     res.send('Welcome to About page')
// })

// app.listen(5000);

// const express = require('express');
// const app = express();
// const route = express.Router();

// const reqFilter = (req,res,next)=>{
//         // console.log('this is middleware');
//         if(!req.query.age){
//             res.send('Please provide age')
//         }
//         else if(req.query.age < 18){
//             res.send("You can't acces this page")
//         }
//         else{
//             next();
//         }
//     }

//     route.use(reqFilter)

//     app.get('/',(req,res)=>{
//         res.send('This is Home Page')
//     })

//     route.get('/about',(req,res)=>{
//         res.send('this is about page');
//     })

//     route.get('/contact',(req,res)=>{
//         res.send('This is Contact Page')
//     })

//     app.use('/',route);
//     app.listen(5000)
    

// how to connect mongodb with node js 

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'e-comm';


// async function getData(){
//     let result =  await client.connect();   //it returns a promise so we are using ascync await for handling promise
//     let db = result.db(dbName);  //to select our database name
//     // let collection = db.collection('products');
//     return db.collection('products');
//     // let response = await collection.find({}).toArray(); //it is also giving a promise
//     // console.log(response)
// }

// getData();

// getData().then(res=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })


// how to read data from mongodb 

// const dbConnect = require('./mongodb');

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main();