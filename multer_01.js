const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const fs = require('fs');
const uploaddir = path.join(__dirname,"upload_files")

if(!fs.existsSync(uploaddir)){
    fs.mkdirSync(uploaddir);
}
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploaddir")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");

app.post("/upload",(req,res)=>{
    res.send("file Upload")
})

app.listen(3333);

