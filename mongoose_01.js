const mongoose = require('mongoose');

const main = async ()=>{
  await mongoose.connect("mongodb://localhost:27017/ecom");
  const productSchema = new mongoose.Schema({
    name : String,
    brand : String,
    model : Number
  })

  const productModel = mongoose.model('products',productSchema);
  let data = new productModel({name:"m11",brand:"Realme",model:4500});
  let result = await data.save();
  console.log(result);
}

main();