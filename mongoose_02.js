const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom');

const productSchema=new mongoose.Schema(
    {
        name : String,
        brand : String,
        model : Number
    }
);

const saveInDb = async ()=>{
    const product =mongoose.model('products',productSchema);
    let data  = new product({
        name : "min 32",
        brand : 'local',
        model : 200
    })
    const result = await data.save();
    console.log(result);
}
//saveInDb();

const updateInDB = async()=>{
    const product =mongoose.model('products',productSchema);
    let data = await product.updateOne(
        {name : 'min 32'},
        {$set : {model : 1300}}
    )
    if(data.acknowledged)
        console.log("updated");
    else
        console.log("not updated");
}
//updateInDB();

const deleteInDB=async () =>{
    const product = mongoose.model('products',productSchema);
    let  data = await product.deleteOne({name :'min 32' })
    
    if(data.acknowledged)
        console.log('deleted');
    else
        console.err("not deleted");
}

//deleteInDB();

const findInDB=async ()=>{
    const product = mongoose.model('products',productSchema);
    const data = await product.find();

    console.log(data);
}
findInDB();
