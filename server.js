const { request, response } = require('express');
const express = require ('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT|| 3000;
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const usercontroller = require('./controllers/usercontrollers')

app.use(express.json());

app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello Welcome to my todo API"});
});

app.post('/user',usercontroller.adduser);
app.get('/user',usercontroller.getAlluser);
app.patch('/user/:userId',usercontroller.updateById);
app.delete('/user/:userId',usercontroller.deleteById);
app.get('/user/:userId',usercontroller.getuserById);

app.listen(port,()=>{
    console.log("The server is running ",port);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log("DataBase not connect",error.message);
    });
});


