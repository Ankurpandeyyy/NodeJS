const connectdb = require('./mongoConnectDb');

const deletedata =async ()=>{
   let db = await connectdb();
   let result = await db.deleteMany({name:'max pro 2'});

   if(result.acknowledged)
      console.log("deletedd");
    else
      console.deleted("not deleted");
}

deletedata();