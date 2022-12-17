const dbConnect = require('./mongodb');

const insert = async()=>{
    let data = await dbConnect();
    // data = await data.insert({name:'oppo f7',brand:'oppo'})
    // for multiple data 
    data = await data.insert([
        {
            name:'max1',
            brand:'vivo',
            category:'mobile'
        },
        {
            name:'max2',
            brand:'vivo',
            category:'mobile'
        },
    ])
    // console.log(data)
    if(data.acknowledged){
        console.log('data inserted')
    }
}
insert();

// const dbConnect = require('./mongodb');

// const insert = async()=>{
//     let data = await dbConnect();
//     data = await data.insertMany([{name:'oppo f10',brand:'oppo',price:240,categroy:'mobile'},{name:'oppo f11',brand:'oppo',price:250,categroy:'mobile'}])
//     console.log(data);
// }

// insert();