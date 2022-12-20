const mongoose = require('mongoose');

// for mongoose.connect
 mongoose.connect("mongodb://localhost:27017/e-comm");
// how to make mongoose.Schemas 
const productSchema = new mongoose.Schema({
    name:String,   // yeh decide karta hai ki app only name wali field hi add kar skte ho
    price: Number,
    brand: String,
    category: String
});

// const saveIndb = async()=>{
//     // mongoose.model connect mongodb and node js by using mongoose.Schemas 
//     const productModel = mongoose.model('products', productSchema); //products is collection name
//     // let data = new productModel({name:'my8'}); //if i enterd a price or any extra property it will not be added because we set schema for name only
//     let data = new productModel({name:'oppo f9',price:200,brand:'oppo',category:'mobile'})
//     let result = await data.save();
//     console.log(result)
// }

// saveIndb();

const updateIndb = async()=>{
    // mongoose.model connect mongodb and node js by using mongoose.Schemas 
    const Product = mongoose.model('products', productSchema); //products is collection name
    let data = await Product.updateOne(
        {name:'oppo f9'},
        {
            $set : {price: 100}
        }
    )
    console.log(data)
}

// updateIndb();

const deleteIndb = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne({name: 'm10'})
    console.log(data)
}
// deleteIndb();

const findIndb = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.find();
    console.log(data)
}

findIndb();