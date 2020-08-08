import React from  'react'
import { useForm } from "react-hook-form"
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'
function Pageeight(props){

  const { register,  errors,handleSubmit } = useForm();

 //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)

		//so we are sending our data to the global store
		props.stepeight(data)
		//since the data has been submitted  successfully,we can direct the user to the next
		//page

        props.handleNext()
        //console.log(props.formdata)
	}

	//console.log(props.data)
		return (
			<div >
			  <div className='content'>
			  <div className='message'>
			  Finally, we would very much like that your honest contribution & personal aspirations are attributed to you and not any other person.
               Kindly fill in your details
			  </div>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

			{/*Each field is required to have a unique name*/}
			   <label>Full Names < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='fullnames'
               defaultValue={props.data.fullnames}
			   ref={register({required:true})}
			   />

			   <label>Phone number < span className='required'>*</span></label>
			   <input
			   type='number'
			   name='phonenumber'
			   defaultValue={props.data.phonenumber}
			   ref={register({required:true})}
			   />
		<div className='year'>
			<label className='label'>Year of birth< span className='required'>*</span></label>
			<input type="number"  name='year' ref={register({required:true})}></input>
		</div>
	
			   <label>Email< span className='required'>*</span></label>
			   <input
			   type='email'
			   name='email'
			   defaultValue={props.data.email}
			   ref={register({pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
			   />
			   {errors.email && <span className='error'>Please input a valid email</span>}

			   <button className='next prev' type='submit'>
			   Submit
              </button>
			   </form>
			   <button className='next' onClick={props.handleBack}>Prev</button>
			  </div>
			</div>
			)
	
}
function mapStateToProps(state){
	return {
		data:state.eight,

	}

}

// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pageeight)