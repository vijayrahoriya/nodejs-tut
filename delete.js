// const dbConnect = require('./mongodb');

// const deleteMethod = async()=>{
//     let data = await dbConnect();
//     // data = await data.deleteOne({name:'oneplus'})
//     // for delting more 
//     data = await data.deleteMany({name:'oppo f7'})
//     console.log(data)
// }

// deleteMethod();

const dbConnect = require('./mongodb');

const deleteMethod = async ()=>{
    let data = await dbConnect();
    data = await data.deleteMany({brand:'oppo'});
    console.log(data)
}

deleteMethod();