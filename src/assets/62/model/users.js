import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name:String,
    lastname:String,
    emeil:String,
    number:Number,
    text:String,
    titile:String,
    
  })

const Users = mongoose.model('users', UsersSchema);

export { Users, UsersSchema };