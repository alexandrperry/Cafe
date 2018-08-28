const mongoose = require('mongoose');
const {Schema} = mongoose;

const catalogSchema = new Schema({
    type:String,
    name:String,
    image:String,
    ingredients:String,
    price:Number,
    id:String
});

const Catalog=mongoose.model('catalog',catalogSchema);

module.exports=Catalog;