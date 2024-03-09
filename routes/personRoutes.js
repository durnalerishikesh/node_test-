const express=require('express');
const router=express.Router();
const person=require('./../models/person');


router.post('/',async(req,res)=>{
    try{
      const data=req.body;//Assuming the request body constains the person data
  
      //create a new person document using the mongoose model
      const newPerson=new person(data);
  
      //save the new person to the database
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    } 
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  
  })


  router.get('/',async(req,res)=>{
    try{
      const data=await person.find();
      console.log('data fatched');
      res.status(200).json(data);
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
      }
  
  })

  router.put('/:id',async(req,res)=>{
    try{
      const personId=req.params.id;
      const updatedPersonData=req.body;

      const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
        new: true,//Return the updated document 
        runValidators:true,//Run Mongoose validation
      })
      if(!response){
        return res.status(404).json({error:'Person not found'});
      }
      console.log('data updated');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  router.delete('/:id',async(req,res)=>{
   try{
    const personId=req.params.id;//Extract the person's ID from the URL parameter 

    //Assuming you have a Person model
    const response=await person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message:'person Deleted Successfully'});
   }
   catch{
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
   }
   
  })

module.exports=router;