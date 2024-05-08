const express= require('express');
const app = express();
const DBConnection = require('./dbConnection/connection')
require('dotenv').config()
const PORT = process.env.SERVER_PORT 

// database connection 
DBConnection(); 

// send json or serve static files 
app.use(express.json())
app.use(express.static('public'))

// importing routes
const authRoute = require('./routes/authRoutes')
app.use('/api',authRoute)

app.listen(PORT,()=>{
    console.log('server running on port : '+ PORT)
})