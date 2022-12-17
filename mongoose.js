const mongoose = require('mongoose');

const main = async()=>{
    // for mongoose.connect
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    // how to make mongoose.Schemas 
    const productSchema = new mongoose.Schema({
        name:String,   // yeh decide karta hai ki app only name wali field hi add kar skte ho
        price: Number
    });
    // mongoose.model connect mongodb and node js by using mongoose.Schemas 
    const productModel = mongoose.model('products', productSchema); //products is collection name
    // let data = new productModel({name:'my8'}); //if i enterd a price or any extra property it will not be added because we set schema for name only
    let data = new productModel({name:'m9',price:200})
    let result = await data.save();
    console.log(result)
}

main();