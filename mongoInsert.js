const dbconnect = require('./mongoConnectDb');

const insert=async ()=>{
   let db = await dbconnect();
   const result = await db.insertMany(
    [{name : "max 11",brand:'cd',model:12000},
    {name : "max 21",brand:'de',model:13000},
    {name : "max 31",brand:'ef',model:14000}]
   )
   if(result.acknowledged)
       console.log("data inserted");
   
}

insert()