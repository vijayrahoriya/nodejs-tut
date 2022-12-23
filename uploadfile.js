// for upload a file in nodejs we use multer npm package then make a router for upload file and write code for upload file 
const express = require('express');
const app = express();
const multer = require('multer');

// for uploading a file create a multer function 
const upload = multer({ 
    storage: multer.diskStorage({
        destination: function(req,file,cb){    //cb means call back function and upload is a folder name
            cb(null, 'uploads')
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname + "-" + Date.now() + ".jpg")  //date.now for optional we can use it or not and we will have to use file extension name
        }
    })
}).single("user_file")      //for informing that we are uploading single file

app.post('/upload',upload,(req,res)=>{    //upload ek middle ware hai so we are using it as second parameter
    res.send('file uploaded')
})

app.listen(5000)