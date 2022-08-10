require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false,

}));




mongoose.connect('mongodb://localhost:27017/userDB');

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});




const User = new mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/login', (req, res) => {
  res.render('login')
});

app.get('/register', (req, res) => {
  res.render('register')
});

app.post('/register', (req, res) => {

});


app.post('/login', (req, res) => {

});

app.listen(3000, () => {
  console.log('The server is running on port 3000');
});
