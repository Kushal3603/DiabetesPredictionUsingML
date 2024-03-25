const UserModel=require('./models/User')
const DoctorModel=require("./models/Doctor")
const EntryModel=require("./models/Entry")
const express=require('express');
const cors=require('cors');
const  mongoose  = require('mongoose');
const HistoryModel = require('./models/History');
const FeedbackModel = require('./models/Feedback');
const app=express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Project")
.then(()=>console.log("MongoDB connected"))
.catch(()=>console.log("Not connected"))

app.post('/signup',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record exists.")
        }
    })
})

app.post('/doctorSignup',(req,res)=>{
    DoctorModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/test', async (req, res) => {
    try {
      const formData = req.body;
      console.log('Received data:', formData); 
      const history = new HistoryModel({
        Email:formData.email,
        Heredity: formData.heredity,  
        PhysicalActivity: formData.physicalActivity,
        FastFood: formData.junk,
        Glucose: formData.glucose,
        BloodPressure: formData.bp,
        BMI: formData.bmi,
        Age: formData.age,
        Outcome: formData.predictions
      });
      await history.save();
  
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).send('Error saving data');
    }
  });

app.post('/doctorLogin',(req,res)=>{
    const {email,password}=req.body;
    DoctorModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record exists.")
        }
    })
})

app.post('/doctorEntry', async (req, res) => {
    try {
      const formData = req.body;
      console.log('Received data:', formData); 
      const entry = new EntryModel({
        Heredity: formData.diabetesFamily,  
        PhysicalActivity: formData.physicalActivity,
        FastFood: formData.fastFoodFrequency,
        Glucose: formData.glucoseLevel,
        BloodPressure: formData.bloodPressure,
        BMI: formData.bmi,
        Age: formData.age,
        Outcome: formData.isDiabetic
      });
      await entry.save();
  
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).send('Error saving data');
    }
  });

  app.post('/feedback', async (req, res) => {
    try {
      const data = req.body;
      console.log('Received data:', data); 
      const feedback = new FeedbackModel({
        Feedback:data.feedback
      });
      await feedback.save();
  
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).send('Error saving data');
    }
  });

  const dataSchema = new mongoose.Schema({
    Email:String,
    Heredity: Number,  
    PhysicalActivity: Number,
    FastFood: Number,
    Glucose: Number,
    BloodPressure: Number,
    BMI: Number,
    Age: Number,
    Outcome: Number
  });
  const Data = mongoose.model('histories', dataSchema);
  app.get('/userHistory', async (req, res) => {
    try {
      const {Email}=req.query
      const data = await Data.find({Email:Email});
      res.json(data);
      
    } catch (error) {
      console.error('Error fetching :', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  

app.listen(3001,()=>{
    console.log('Listening...')
})
