const connectDB = require('./mongoConnectDB');
//read dataaaaaa

// connectDB().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

const main = async ()=>{
    let data = await connectDB();
    data = await data.find().toArray();
    console.log(data);
}

main();