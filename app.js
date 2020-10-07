const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes')


const app = express();

// Set views path
app.set('views', path.join(__dirname, 'views'));

// Set public path
app.use(express.static(path.join(__dirname, 'public')));
// Set pug as view engine
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', patientRoutes);


const uri =
  // eslint-disable-next-line max-len
  'mongodb+srv://Fort:fortune@cluster0.144qe.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })

  .catch((err) => console.log(err));

let port = 3000;
  

app.listen(port, ()=> {
    console.log(`server is up on port: ${port}`)
})