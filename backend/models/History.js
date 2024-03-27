const mongoose=require('mongoose')

const HistorySchema=new mongoose.Schema({
  TestDate:String,
  Email:String,
  Heredity: Number,  
  PhysicalActivity: Number,
  FastFood:Number,
  Glucose: Number,
  BloodPressure: Number,
  BMI: Number,
  Age: Number,
  Outcome: Number
})

const HistoryModel=mongoose.model("history",HistorySchema)
module.exports=HistoryModel