import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    img: String,
    activities: String,
    info: String,
    buttomA: String,

})

const Product = mongoose.model('aroundActivities', productSchema);

export { Product };