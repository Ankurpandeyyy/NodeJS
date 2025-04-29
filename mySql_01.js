const mysql = require('mysql');
const con = mysql.createConnection(
    {
      host : 'localhost',
      user : 'root',
      pass : '',
      database :  'demonode'
    }
)

con.connect((err)=>{
    if(err)
        console.warn(err);
    else
        console.log("database fetched");
})

con.query("select * from users",(err,result)=>{
    console.log("results",result);
})
