import React from  'react'
import { useForm } from "react-hook-form"
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'
function Pageone(props){

  const { register,  errors,handleSubmit } = useForm();


 //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)

		//so we are sending our data to the global store
		props.stepone(data)
		//since the data has been submitted  successfully,we can direct the user to the next
		//page
        props.handleNext()
	}
	  //const handleNext=()=>{
		//console.log(errors)
	//}
	
	//console.log(props.data)
		return (
			<div >
			  <div className='content'>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

			{/*Each field is required to have a unique name*/}
			   <div>
			   <label>First Name < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='firstname'
              defaultValue={props.data.firstname}
			   ref={register({required:true})}
			   />
			    {errors.firstname && <span className='error'>First Name is required</span>}

			   <label>Last Name < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='lastname'
			   defaultValue={props.data.lastname}
			   ref={register({required:true})}
			   />
			    {errors.lastname && <span className='error'>Last Name is required</span>}

			   </div>
			    <div>
			   <label>Age < span className='required'>*</span></label>
			   <input
			   type='number'
			   name='age'
			   defaultValue={props.data.age}
			   ref={register({required:true,min: 2, max: 100})}
			   />
			   {errors.age && <span className='error'>Age must be between 2 to 100 years</span>}

			   </div>
              <div>
			   <label>Email< span className='required'>*</span></label>
			   <input
			   type='email'
			   name='email'
			   defaultValue={props.data.email}
			   ref={register({required:true,pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
			   />
			   {errors.email && <span className='error'>Please input a valid email</span>}

			   </div>
			   <button className='next first' type='submit'>
			   Next
              </button>
			   </form>
			  </div>
			</div>
			)
	
}
function mapStateToProps(state){
	return {
		data:state.one
	}

}

// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pageone)