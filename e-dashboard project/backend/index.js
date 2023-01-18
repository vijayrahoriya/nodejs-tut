const express = require('express');
const app = express();
const cors = require('cors');//for cors error to resolve
require('./db/config');
const User = require('./db/User')
const Product = require('./db/Product')
const Jwt = require('jsonwebtoken')
const jwtkey = 'e-comm';

app.use(express.json()); //for post request
app.use(cors());

app.post('/register', async(req,res)=>{
    // res.send('api called')
    let user = new User(req.body);
    let result = await user.save()
    result = result.toObject(); //for deleting password from the response
    delete result.pass
    Jwt.sign({result},jwtkey,{expiresIn:'2h'},(err,token)=>{
        if(err){
            res.send({result:'Something went wrong'})
        }else{
            res.send({result, auth:token})
        }
    })
})

app.post('/login',async(req,res)=>{
    // for looking that user is sending data with email or pass 
    if(req.body.pass && req.body.email){
        let user = await User.findOne(req.body).select('-pass');//.select me jo value dalenge yah use remove kar dega
        console.log(user)
        if(user){
            Jwt.sign({user},jwtkey,{expiresIn:'2h'},(err,token)=>{
                if(err){
                    res.send({error:'Something went wrong'})
                }else{
                    res.send({user,auth:token})
                }
            })
        }else{
            res.send({result:'No user found'})
        }
    }else{
        res.send({result:'Please provide some details'})
    }
})

app.post('/add-product',verifyToken, async(req,res)=>{
    let product = new Product(req.body)
    let result = await product.save();
    res.send(result)
})

app.get('/products',verifyToken, async (req,res)=>{
    let products = await Product.find();
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result: 'No Products found'})
    }
})

app.delete('/product/:id',verifyToken, async(req,res)=>{
    let product = await Product.deleteOne({_id: req.params.id});
    res.send(product)
})

app.get('/product/:id',verifyToken,async (req,res)=>{
    let result = await Product.findOne({_id: req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({error:'No result found'})
    }
})

app.put('/product/:id',verifyToken, async(req,res)=>{
    let result = await Product.updateOne({_id: req.params.id},{$set : req.body})
    res.send(result)
})

app.get('/search/:key',verifyToken,async(req,res)=>{
    let result = await Product.find({
        "$or":[//when we find more result we use $or
            {name:{$regex:req.params.key}},
            // {company:{$regex:req.params.key}},
            // {category:{$regex:req.params.key}}
        ]
    })
    res.send(result)
})

// for valideation of token 
function verifyToken(req,res,next){
    let token = req.headers['authorization'];
    // console.log(token)
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token, jwtkey ,(err,valid)=>{
                if(err){
                res.status(401).send({result:'Please provide valid token'})
            }else{
                    next();
                }
            })
        }else{
        res.status(404).send({result:'Please addd token with headers'})
    }
}

app.listen(5000)
