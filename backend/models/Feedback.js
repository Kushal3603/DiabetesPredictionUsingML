const mongoose=require('mongoose')

const FeedbackSchema=new mongoose.Schema({
    Name:String,
    Feedback:String
})

const FeedbackModel=mongoose.model("feedbacks",FeedbackSchema)
module.exports=FeedbackModel