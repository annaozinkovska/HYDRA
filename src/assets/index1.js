import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const url = 'mongodb+srv://annaozinkovska:WvGDTg6jxLv0DcpJ@cluster0.pee2yax.mongodb.net/hydra';
mongoose.connect(url)
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    })
  }).catch((err) => {
  console.log(`DB connection error: ${err}`)
});
const PORT = 4223;
const app = express();

const Schema = mongoose.Schema;
const CartsSchema = new Schema({
titleua:String,
titleeng :String,
textua:String,
texteng:String,
urlimg:String,
hrefbutton:String,
})
const Carts = mongoose.model('carts', CartsSchema);
app.use(cors());

app.get('/', (req, res) => {
  Carts.find()
    .then(carts => {
      const cartsHtml = carts.map(carts => carts
      );
      res.send(cartsHtml);
    })
    .catch(error => {
      console.error(error);
    });
})

app.listen(4222, () => {
  console.log('The server is running');
})

export class index {
 cartsHtml
}



