const mongoose=require('mongoose')

const FeedbackSchema=new mongoose.Schema({
    Feedback:String
})

const FeedbackModel=mongoose.model("feedbacks",FeedbackSchema)
module.exports=FeedbackModel