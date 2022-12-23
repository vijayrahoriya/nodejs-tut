const express = require('express');
const app = express();
const con = require('./configsql')

app.use(express.json())

app.get('/',(req,res)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            console.log('error');
        }else{
            res.send(result)
            // console.log(result)
        }
    })
    // res.send('route done')
})

app.post('/',(req,res)=>{
    // const data = {name:"vijay",user_type:"visitor"};
    const data = req.body
    con.query('INSERT INTO users SET ?',data,(err,result,field)=>{
        if(err){
            throw err;
        }else{
            res.send(result)
        }
    })
})

app.put('/',(req,res)=>{
    const data = ['Tony','footballer',0]
    con.query('UPDATE users SET name = ?,user_type =? where id = ?',data,(err,result,fields)=>{
        if(err) err;
        else{
            res.send(result)
        }
    })
})

app.listen(5000)