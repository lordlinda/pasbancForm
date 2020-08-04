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
	const newForm =new Form({
       data:req.body
		})
    newForm.save()
    .then(data=>{
    	res.status(200).json({msg:'data sent successfully'})
    }).catch(err=>{
		res.status(500).json({error:err.message})
	})
})

module.exports =router
//we export our routes