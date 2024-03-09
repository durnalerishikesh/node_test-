const express = require('express');  
const app = express();
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body



app.get('/', function (req, res) {
  res.send('Hello World my name is rishikesh durnale, i am from jagalpur(bk)')
})




//Import the router files
const personRouters=require('./routes/personRoutes');
const menuItemRouters=require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRouters);
app.use('/menu',menuItemRouters);

app.listen(3000,()=>{
  console.log('listening on port 3000');
})