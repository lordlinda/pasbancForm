//import mongoose
const mongoose =require('mongoose')
//so the mongoose schema allows to save our data with a certain structure
//since mongoose is a schemaless database
//in this case we have alot of data that is changing based on the user input
//and therefore we are just goin to define its type as mixed meaning it has different types
//strings,numbers and so on
//types ensure that the data stored is in the data stored in valid and not just anything
//so first we create a form schema using the  mongoose schema
const formSchema =new mongoose.Schema({
	data:{}
})
//then we create a model which we will use to deal with our data from the frontend
//that will be stored in the backend
//then we export the model
module.exports = mongoose.model('form',formSchema)