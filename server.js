//Status Code Along (be-4-ssr-views-show-and-adding-css)
// Dependencies
const express = require('express');


//Mongoos
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('connected to mongo: ', process.env.MONGO_URI))




//Configuration 
require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

const app = express();

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  });
  
// Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
});





app.listen(PORT, ()=> {
    console.log('Listening on port: ', PORT);
});

