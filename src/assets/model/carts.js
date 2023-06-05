import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartsSchema = new Schema({
titleua:String,
titleeng:String,
textua:String,
texteng:String,
urlimg:String,
hrefbutton:String,
   
  })

const Carts = mongoose.model('carts', CartsSchema);

export { Carts, CartsSchema};