import React from  'react'
import { useForm ,Controller} from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel} from '@material-ui/core'
import {connect} from 'react-redux'


import * as actions from '../redux/actions/index.js'


function Pagethree(props){

  const { register,handleSubmit,control } = useForm();



  //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepthree(data)
				//after ensuring the data has been authenticated can someone move to the next page
		props.handleNext()
	}
	//console.log(props.data)

		return (
			<div >
			  <div className='content'>
			  	<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
			{/*Each field is required to have a unique name*/}
             {/*so down below we are going ot have queation asked based on if they save or not it has to be exactcly equal to yes
             if you change it to capital y or anything else it will just give you no response*/}
			{
				props.save === 'yes' ?
				<div>
			   <label>Why do you save?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='savingReason'
			   defaultValue={props.data.savingReason}
			   ref={register({required:true})}
			   />

			   <label>How do you save?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='savingWay'
			   defaultValue={props.data.savingWay}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>Why don't you save? < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='nosavingReason'
			   defaultValue={props.data.nosavingReason}
			   ref={register({required:true})}
			   />

			   <label>What would help you or inspire you to start saving? < span className='required'>*</span></label>
			   <input
			   type='text'
			   name='inspirationToSave'
			   defaultValue={props.data.inspirationToSave}
			   ref={register({required:true})}
			   />

			   </div>

			}
			    <div>
			   <label >Do you have an emergency fund?< span className='required'>*</span></label>
                         <Controller
                    name="emergencyFund"
                    control={control}
                    defaultValue={props.data.emergencyFund}
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
		data:state.three,
		save:state.two.save
	}

}
// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pagethree)