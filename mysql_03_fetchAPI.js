const express = require('express')
const con = require('./mysql_02_config')

const app = express();
app.use(express.json());

//fetching all data
app.get('/',(req,res)=>{
    con.query('select * from users',(err,result)=>{
        if(err)
            console.log(err);
        else
            console.log(result)
    })
})

//inserting static data
// app.post('/',(req,res)=>{
//     let data = {id:'03' , name:'suku',city:'noida'}  
//     con.query('INSERT INTO users set ?',data,(err,result,fiels)=>{
//        if(err)
//           error ;
//         else
//           res.send(data);
//     })
// })

//inserting data through postman or dynamically
app.post('/',(req,res)=>{
    let data =  req.body;
    con.query('INSERT INTO users set ?',data,(err,result,fiels)=>{
       if(err)
          throw error ;
        else
        res.send(data);
})
})

//updating data statically
// app.put('/',(req,res)=>{
//     const data = ["33","pandey","pune","3"]
//     con.query('UPDATE users SET id=? , name=?, city=? where id=?' , data,(err,result,fields)=>{
//       if(err)
//         throw error ;
//     else
//         res.send(result);
//     })
// })

//updating Data dynamically
app.put('/:id',(req,res)=>{
    const data = [req.body.id,req.body.name,req.body.city,req.params.id]
    con.query('UPDATE users SET id=? , name=?, city=? where id=?' , data,(err,result,fields)=>{
      if(err)
        throw error ;
    else
        res.send(result);
    })
})


//Delete Api with mysql statically
// app.delete("/",(req,res)=>{
//     con.query('delete from users where id = "4"',(err,result,fields)=>{
//        if(err)
//         throw error 
//        else
//          res.send("data deleted");
//     })
// })


//deleting data dynamically
app.delete("/:id",(req,res)=>{
    con.query('delete from users where id ='+req.params.id,(err,result,fields)=>{
       if(err)
        throw error 
       else
         res.send("data deleted");
    })
})

app.listen(8080);

