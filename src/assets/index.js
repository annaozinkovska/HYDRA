import express from 'express'
import mongoose from 'mongoose';
import {  Activities} from './model/product.js';
const url = 'mongodb://127.0.0.1:27017/hydra';
mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })  }) .catch((err)=> {console.log(`DB connection error: ${err}`)});
             const PORT = 4234;
const app = express();
// const activitiesmongobd={
//     buttomA:'',
//     img:'',
//     info:'',
//     activities:'',
// };
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

app.get('/', (req, res) => {
    Users.find()
        .then(  users=> {    const userHtml = users.map(users => users
);      
        res.send(userHtml); })
        .catch(error => {
        console.error(error);});})

export class index{userHtml}



