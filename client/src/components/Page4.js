import React from  'react'
import { useForm,Controller } from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel,TextField,withStyles} from '@material-ui/core'
import {connect} from 'react-redux'
import {compose} from  'redux'
import * as actions from '../redux/actions/index.js'


const styles ={
	container:{
    width:'100%',
    margin:'12px 0px'
	}
}
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
          const {classes}=props
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
			   <label>Why is it that you have an emergency fund? < span className='required'>*</span></label>
			   <span className='description'>What's your inspiration</span>
			    <TextField
			     className={classes.container}
			    id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 variant="outlined"
                  name='emergencyfundReason'
			   defaultValue={props.data.emergencyfundReason}
			   inputRef={register({required:true})}
			   />

			   <label>How do put money into your emergency fund?</label>
			    <span className='description'>Through a bank, cooperative, mobilemoney, friends or ??</span>
			   <input
			   type='text'
			   name='emergencyfundWay'
			   defaultValue={props.data.emergencyfundWay}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>Why don't you save up for any emergencies?< span className='required'>*</span></label>
			   <TextField
			    className={classes.container}
			   type='text'
			    id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 variant="outlined"
			   name='noemergencyFundReason'
			   defaultValue={props.data.noemergencyFundReason}
			   inputRef={register({required:true})}
			   />

			   <label>What do you think can help get you to start saving for emergencies?< span className='required'>*</span></label>
			   <TextField
			    className={classes.container}
			   type='text'
			    id="outlined-multiline-static"
                multiline
               rowsMax={4}
               variant="outlined"
			   name='inspirationForEmergencyFund'
			   defaultValue={props.data.inspirationForEmergencyFund}
			   inputRef={register({required:true})}
			   />

			   </div>

			}
			    <div>
			   <label >Do you have any investments?< span className='required'>*</span></label>
			   <span className='description'>  things that generate money into your pockets</span>
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
  export default compose(
 	withStyles(styles),
 	connect(mapStateToProps, actions)
 	)(Pagefour)