import React from  'react'
import { useForm,Controller } from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel} from '@material-ui/core'
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'

function Pagefour(props){

  const { register,handleSubmit ,control} = useForm();
  

    //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepfour(data)
			//after ensuring the data has been authenticated can someone move to the next page	
		props.handleNext()
	}
	//console.log(props.emergencyFund)

		return (
			<div >
			  <div className='content'>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
			{/*Each field is required to have a unique name*/}
		{/*this shows questions based on if they have answered question of if they have an emergency fund
		the options are yes or no and the questions are accordingly as shown below*/}
			{
				props.emergencyFund === 'yes' ?
				<div>
			   <label>What inspired you to have an emergency fund? < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='emergencyfundReason'
			   defaultValue={props.data.emergencyfundReason}
			   ref={register({required:true})}
			   />

			   <label>How do you save for an emergency fund?</label>
			   <input
			   type='text'
			   name='emergencyfundWay'
			   defaultValue={props.data.emergencyfundWay}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>Why don't you save for emergencies?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='noemergencyFundReason'
			   defaultValue={props.data.noemergencyFundReason}
			   ref={register({required:true})}
			   />

			   <label>What would help you or inspire you to start saving for emergencies?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='inspirationForEmergencyFund'
			   defaultValue={props.data.inspirationForEmergencyFund}
			   ref={register({required:true})}
			   />

			   </div>

			}
			    <div>
			   <label >Do you have any investments?< span className='required'>*</span></label>
                          <Controller
        name="investments"
        control={control}
        defaultValue={props.data.investments}
        rules={{ required: true }}
        render={props => <RadioGroup {...props}
         > <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                  />
         </RadioGroup>} // props contains: onChange, onBlur and value
      />
			   </div>
			    <button className='next prev'>Next</button>
			   </form>
			  <button className='next'onClick={props.handleBack}>Prev</button>
			  </div>
			</div>
			)

}

function mapStateToProps(state){
	return {
		data:state.four,
		emergencyFund:state.three.emergencyFund
	}

}
// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pagefour)