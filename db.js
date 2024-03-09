const mongoose=require('mongoose');
//const mongoURL='mongodb://localhost:127.0.0.1:27017/hotel';
/*mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});*/

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


//mongoose maintain a default connection object representing the mongodb connection
const db=mongoose.connection;

//define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',(err)=>{
    console.error('mongodb connection error:',err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

//export database connection 
module.exports=db;