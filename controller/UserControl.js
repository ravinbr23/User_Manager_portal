const mongoose = require('mongoose');


 const User = require('../modal/UserModal.js');

const GetAllUsers = async (req,res) => {

    try {
        const Users = await User.find();
        res.status(200).json(Users);
    }
    catch (error){
        res.status(500).json({message : error.message});
    }
};

const GetUserById = async (req,res)=>{

    const id = req.params.id;

    try{
          const user = await User.findById(id);
          
          if(!user){
            return res.status(404).json({ message :'User Id not know'});

          }
          res.status(200).json({user});
    }

    catch (error){
        res.status(500).json({message:error.message});
    }

};

const CreateUser = async (req,res) => {
    const {Name,Email,Gender,MobileNumber,Status } = req.body ;

    try{
    const user = await User.create({
        Name , Email , Gender, MobileNumber ,Status
    });
    res.status(201).json(user);
}

catch (error){
    if(error.code===11000){
        return res.status(409).json({message:'email already exists'});
    }
    res.status(400).json({message:error.message});
}
}; 

const UpdateUser = async (req,res) => {
    const id =req.params.id;

    try {
        const { Name , Email , Gender , MobileNumber , Status}= req.body;
        const user = await User.findByIdAndUpdate(id ,
             {Name , Email , Gender , MobileNumber , Status},{new:true , runValidators:true});
            res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
};

const DeleteUser = async (req,res)=>{
    const id=req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({message:'user deleted sucessfully'});
    }
    catch(error){
        res.status(500).json({message:error.message});

    }
};

module.exports={GetAllUsers,GetUserById,CreateUser,UpdateUser,DeleteUser};