const express = require('express')
const app = express();
require('./config');
const Product = require('./product');

app.use(express.json())

app.post('/create',async(req,res)=>{
    // res.send('Done')
    // console.log(req.body)
    // how to save post data to monogdb
    let data = new Product(req.body);
    let result = await data.save();
    res.send(req.body)

})

app.get('/list',async(req,res)=>{
    let data = await Product.find();
    res.send(data)
})

app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params)
    res.send(data)
})

app.listen(5000)