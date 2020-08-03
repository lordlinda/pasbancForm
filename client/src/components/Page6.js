import React from  'react'
import { useForm } from "react-hook-form"
import {TextField,withStyles} from '@material-ui/core';
import {connect} from 'react-redux'
import {compose} from  'redux'
import * as actions from '../redux/actions/index.js'

const styles ={
	container:{
    width:'100%',
    height:'200px',
    marginTop:'10px'
	}
}
function Pagesix(props){
  const { register,handleSubmit} = useForm();
  //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepsix(data)
		//after ensuring the data has been authenticated can someone move to the next page		
		props.handleNext()
	}
	//console.log(props)

const {classes}=props
		return (
			<div  className='aspirations'>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
			{/*Each field is required to have a unique name*/}
			{/*the options are yes or no and the questions are accordingly based on the options as shown below*/}
			{
				props.insurance === 'yes' ?
				<div>
			   <label>What inspired you to have any insurance policy?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='insuranceReason'
			   defaultValue={props.data.insuranceReason}
			   ref={register({required:true})}
			   />

			   <label>How do you pay for your insurance policy?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='insurancePaymentWay'
			   defaultValue={props.data.insurancePaymentWay}
			   ref={register({required:true})}
			   />
			   <label>What more would you wish  insurance policy could cover for you?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='extraInsuranceOptions'
			   defaultValue={props.data.extraInsuranceOptions}
			   ref={register({required:true})}
			   />
			   <label>How has your insurance impacted you to this day?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='insurancePersonalImpact'
			   defaultValue={props.data.insurancePersonalImpact}
			   ref={register({required:true})}
			   />
			   <label>How do you wish insurance would be improved to serve you better?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='insuranceImprovement'
			   defaultValue={props.data.insuranceImprovement}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>How is it that you don't have any form of insurance?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='noinsuranceReason'
			   defaultValue={props.data.noinsuranceReason}
			   ref={register({required:true})}
			   />

			   <label>What would help you or inspire you to start having some?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='inspirationForInsurance'
			   defaultValue={props.data.inspirationForInsurance}
			   ref={register({required:true})}
			   />

			   </div>

			}
			
			   <label>What are your top financial aspirations?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
                  id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 variant="outlined"
                 name='aspirations'
                 inputRef={register({required:true})}
                 defaultValue={props.data.aspirations}

        />
               <button className='next prev'>Submit</button>
			   </form>
			  <button className='next'onClick={props.handleBack}>Prev</button>
			</div>
			)

}
function mapStateToProps(state){
	return {
		data:state.six,
		insurance:state.five.insurance
	}

}

export default compose(
	withStyles(styles),
	connect(mapStateToProps,actions)
	)(Pagesix)