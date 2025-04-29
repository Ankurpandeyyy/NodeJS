const mysql = require('mysql')

const con = mysql.createConnection({
    host : 'localhost',
    user:'root',
    pass:'',
    database : 'demonode'
})

con.connect((err)=>{
    if(err)
        console.log(err)
    else
       console.log("database fetched")
})

module.exports = con ;