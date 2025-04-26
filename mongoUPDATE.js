const connectdb = require('./mongoConnectDb');


const updatedata =async ()=>{
    let db =await connectdb();
    let result = await db.updateMany({name : "max 2"},{
        $set : {name : "max pro 2"}
    }) ;
   // console.log(result);
    if(result.acknowledged)
        console.log("updated");
}

updatedata();