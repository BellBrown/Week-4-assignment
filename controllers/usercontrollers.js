const { response } = require('express');
const usermodel = require('../model/usermodel');

async function adduser(request,response){
try{
    const newuser = await usermodel.create(request.body);
    response.status(543).json(newuser);
}
    catch (error) {
        console.log('something went wrong',error.message);
    }
}


async function getAlluser(request,response){
    try{
        const getAll = await usermodel.find();
        response.status(200).json(getAll);

    } catch (error) {
        console.log("Something went wrong",error.message);
        response.status(400);
    }
}
async function getuserById(request,response){
    try {
        const getAlluser = await usermodel.findById(request.params.todoId);
    response.status(200).json(getAlluser);
    } catch (error) {
       console.log("something went wrong",error.message); 
    }
}

async function updateById(request,response){
    try {
        const update = await usermodel.findByIdAndUpdate(request.params.todoId,request.body)
        response.status(200).json(update);
    } catch (error) {
    console.log("something went wrong",error.message);
    response.status(401);
    }
}

async function deleteById(request,response){
try {
    await usermodel.findByIdAndDelete(request.params.userId)
    response.status(200).json({message:"todo deleted"});
} catch (error) {
    console.log("something went wrong",error.message);
    
}
}

module.exports ={
    adduser,
    getAlluser,
    updateById,
    deleteById,
    getuserById
}