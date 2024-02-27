const mongoose=require('mongoose')

const EntrySchema=new mongoose.Schema({
  Heredity: Number,  
  PhysicalActivity: Number,
  FastFood:Number,
  Glucose: Number,
  BloodPressure: Number,
  BMI: Number,
  Age: Number,
  Outcome: Number
})

const EntryModel=mongoose.model("entries",EntrySchema)
module.exports=EntryModel