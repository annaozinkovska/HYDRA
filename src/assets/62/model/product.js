import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema ({
    activities: String,
    img: String,
    info: String,
    button:String,
  })
 
const Activities = mongoose.model('activities', ActivitiesSchema);

export {Activities, ActivitiesSchema};