const dbConnect = require('./mongodb');
const express = require("express");
// if we want to delete a data by its ID 
const mongodb = require('mongodb');
const app = express();

app.use(express.json());      //to get data from postman use this middleware

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
})

app.post('/',async(req,res)=>{
    console.log(req.body) //for postman data
    // res.send({name:'vijay'})
    // res.send(req.body)
    // to save data in mongodb 
    let data = await dbConnect();
    data = await data.insert(req.body)
    res.send(data)
})

// app.put('/',async(req,res)=>{
//     // console.log(req.body)
//     // res.send({resule:'updated'})
//     let data = await dbConnect();
//     // data = await data.updateOne({name:'mi 10'},{$set:{brand:'Redami'}})
//     data = await data.updateOne({name:req.body.name},{$set:req.body})
//     res.send(data)
// })

// if we want to change this data name 
app.put('/:name',async(req,res)=>{
    let data = await dbConnect();
    data = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
        )
})

app.delete('/:id',async(req,res)=>{
    // console.log(req.params.id)
    let data = await dbConnect();
    data = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(data)
})

app.listen(5000);

