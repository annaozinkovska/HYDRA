import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const url = 'mongodb+srv://annaozinkovska:WvGDTg6jxLv0DcpJ@cluster0.pee2yax.mongodb.net/hydra';
mongoose.connect(url)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

const PORT = 4235;
const app = express();

const Schema = mongoose.Schema;
const UsersSchema
  = new Schema({
  name: String,
  lastname: String,
  email: String,
  number: Number,
  text: String,
  title: String,
});

const Users = mongoose.model('users', UsersSchema);
app.use(cors());

app.get('/', (req, res) => {
  Users.find()
    .then(users => {
      const userHtml = users.map(users => users);
      res.send(userHtml);
    })
    .catch(error => {
      console.error(error);
    });
});

app.post('/users', (req, res) => {
  const { name, lastname, email, number, text, title } = req.body;

  const newUser = new Users({
    name,
    lastname,
    email,
    number,
    text,
    title
  });

  newUser.save()
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    });
});

app.put('/users/:id', (req, res) => {
  const { name, lastname, email, number, text, title } = req.body;
  const userId = req.params.id;

  Users.findByIdAndUpdate(userId, {
    name,
    lastname,
    email,
    number,
    text,
    title
  }, { new: true })
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user' });
    });
});


app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  Users.findByIdAndRemove(userId)
    .then(deletedUser => {
      res.json(deletedUser);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete user' });
    });
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});