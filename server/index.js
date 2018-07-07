const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller.js')

const app = express();
app.use(bodyParser.json());

// //*** to check if connection is working: 
// console.log('connection string', process.env.CONNECTION_STRING);

const port = 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));

//***set db so it can be accessed later
massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
}).catch(error => {
  console.log('-------------- error', error);
});

app.get('/api/inventory', controller.read);
app.post('/api/product', controller.create);