//this is our routes page
//first we import our modules
const express =require('express')
const router=express.Router()
//it holds our routes to what will happen
//form model import
const Form =require('../models/Form.js')


//@route          /user
//@description     get form data for user
//@access         public
router.post('/',(req,res)=>{
	//console.log(req.body)
	Form.create({data:req.body})
	.then(data=>{
		//console.log({msg:'data sent successfully'})
		res.status(200).json({msg:'data sent successfully'})
	}).catch(err=>{
		//console.log(err)
		res.status(500).json({msg:'something went wrong'})
	})
})

module.exports =router
//we export our routes