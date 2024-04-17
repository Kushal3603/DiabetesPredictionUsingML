const mongoose=require('mongoose')

const DoctorSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const DoctorModel=mongoose.model("doctors",DoctorSchema)
module.exports=DoctorModel