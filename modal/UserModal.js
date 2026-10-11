const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema (
    {
        Name : {

            type:String,
            required :[ true,"Name is required"]
        },
        Email :{

            type:String,
            required : [true,"Email is required"],
            unique : [true, "Email already exists"]
        },
        Gender :{
            type: String,
            required :[true , "Enter Your Gender"]
        },
        MobileNumber : {

            type:Number,
            required : [true,"Phone Number is required"],
            unique : [true, "Number already exists"]
        },

        Status :{
            type: String,
            enum:['Active','Inactive'],
            default:'Active'
        }
    },
    {
        timestamps:true 
    }
);

// const User=mongoose.model('User',UserSchema);
module.exports=mongoose.model('User',UserSchema);    