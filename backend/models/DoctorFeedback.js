const mongoose=require('mongoose')

const DoctorFeedbackSchema=new mongoose.Schema({
    Name:String,
    Feedback:String
})

const DoctorFeedbackModel=mongoose.model("doctorFeedbacks",DoctorFeedbackSchema)
module.exports=DoctorFeedbackModel