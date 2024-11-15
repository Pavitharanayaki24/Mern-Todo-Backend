const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router= require('./Routes/ToDoRoute');


const app = express();

// Middleware
app.use(express.json());       
app.use(cors());               

//routes
app.use('/',router)

 mongoose.connect("mongodb+srv://Yogomaster:Yogomaster@cluster12.ogx0q.mongodb.net/xyz?retryWrites=true&w=majority&appName=Cluster12",{ useNewUrlParser: true,
  useUnifiedTopology: true, 
  connectTimeoutMS: 3000,
  socketTimeoutMS:45000})
  .then(() => {
  console.log('MongoDB connected')}).catch((err) => {console.log('Failed to connect',err)});
app.listen(8000, () => console.log(`Server running on port 8000`));

