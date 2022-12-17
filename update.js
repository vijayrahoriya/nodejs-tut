// const dnConnect = require('./mongodb');

// let update = async()=>{
//     let data = await dnConnect();
//     // data = await data.updateOne({brand:'oneplus'},{$set:{name:'oneplus',brand:'nokia'}});
//     // for update many 
//     data = await data.update({brand:'vivo'},{$set:{name:'oneplus',brand:'oneplus'}});
//     if(data.acknowledged){
//         console.log('data updated',data)
//     }
// }

// update();

const dbConnect = require('./mongodb');

const update = async ()=>{
    let data = await dbConnect();
    data = await data.updateMany({brand:'oppo'},{$set:{price:100}})
    console.log(data)
}

update();