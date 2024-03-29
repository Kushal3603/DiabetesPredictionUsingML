const mongoose=require('mongoose')

const DoctorFeedbackSchema=new mongoose.Schema({
    Name:String,
    Feedback:String
})

const DoctorFeedbackModel=mongoose.model("DoctorFeedbacks",DoctorFeedbackSchema)
module.exports=DoctorFeedbackModel