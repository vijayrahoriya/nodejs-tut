require('./db/config');
const express = require('express')
const app = express();
const User = require('./db/User');
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.post('/register',async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.pass
    res.send(result)
})

app.listen(5000)
