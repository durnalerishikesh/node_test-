const mongoose=require('mongoose');

//definding a person schema 

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const personSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  age:{
    type:Number
  },
  work:{
    type:String,
    enum:['chef','waiter','manager'],
    require:true
  },
  mobile:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  addres:{
    type:String
  },
  salary:{
    type:Number,
    require:true
  }
});

//create person model
const person = mongoose.model('person',personSchema);
module.exports=person;