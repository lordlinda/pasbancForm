import React from  'react'
import { useForm } from "react-hook-form"
import {TextField,withStyles} from '@material-ui/core';
import {connect} from 'react-redux'
import {compose} from  'redux'
import * as actions from '../redux/actions/index.js'

const styles ={
	container:{
    width:'100%',
    margin:'12px 0px'
	}
}
function Pagesix(props){
  const { register,handleSubmit} = useForm();
  //this function submits all our data
	const onSubmit=async(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepsix(data)
		 //just before we reset data  we send our data to the backend
        //await props.getData(props.formdata)
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
			   <label>What inspired you to have any insurance policy?
			   < span className='required'>*</span></label>
			   <span className='description'>Why insure?</span>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='insuranceReason'
			   defaultValue={props.data.insuranceReason}
			   inputRef={register({required:true})}
			   />

			   <label>What would you insure that insurance packages don't cover yet to date?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='insurancePaymentWay'
			   defaultValue={props.data.insurancePaymentWay}
			   ref={register({required:true})}
			   />
			   <label>How do you think today's insurance can be improved to serve you better?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='extraInsuranceOptions'
			   defaultValue={props.data.extraInsuranceOptions}
			   inputRef={register({required:true})}
			   />
			   </div>
				:
				<div>
			   <label>Why is it that you don't have any form of insurance?
			   < span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='noinsuranceReason'
			   defaultValue={props.data.noinsuranceReason}
			   inputRef={register({required:true})}
			   />

			   <label> What do you think would inspire or cause you to have some insurance
			   ?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   type='text'
			   name='inspirationForInsurance'
			   defaultValue={props.data.inspirationForInsurance}
			   inputRef={register({required:true})}
			   />
			    <label>How about retirement, what thoughts do you have about it
			   ?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   type='text'
			   name='retirement'
			   defaultValue={props.data.retirement}
			   inputRef={register({required:true})}
			   />

			   </div>

			}
			   <label>What are your top financial ambitions in life?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
                  id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 variant="outlined"
                 name='financialAmbitions'
                 inputRef={register({required:true})}
                 defaultValue={props.data.financialAmbitions}

        />
               <button className='next prev'>Next</button>
			   </form>
			  <button className='next' onClick={props.handleBack}>Prev</button>
			</div>
			)

}
function mapStateToProps(state){
	return {
		data:state.six,
		insurance:state.five.insurance,
		formdata:state
	}

}

export default compose(
	withStyles(styles),
	connect(mapStateToProps,actions)
	)(Pagesix)