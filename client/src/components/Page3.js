import React from  'react'
import { useForm ,Controller} from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel,TextField,withStyles} from '@material-ui/core'
import {connect} from 'react-redux'
import {compose} from  'redux'


import * as actions from '../redux/actions/index.js'

const styles ={
	container:{
    width:'100%',
    margin:'12px 0px',
    lineHeight: '22px',
    fontSize:'22px',
	}
}
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
        const {classes}=props
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
			   <label>What inspires you to save?< span className='required'>*</span></label>
			   <span className='description'>Why do you save</span>
			   <TextField
			   className={classes.container}
                id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 variant="outlined"
                 name='savingReason'
                 inputRef={register({required:true})}
                 defaultValue={props.data.savingReason}
                />

			   <label>How do you save?< span className='required'>*</span></label>
			   <span className='description'>Through a bank, cooperative, mobilemoney, friends or ??</span>
			   <input
			   type='text'
			   name='savingWay'
			   defaultValue={props.data.savingWay}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>Why is it that you don't save? < span className='required'>*</span></label>
			   	 <TextField
                  id="outlined-multiline-static"
                  multiline
                 rowsMax={4}
                 className={classes.container}
                 variant="outlined"
                 name='nosavingReason'
                 inputRef={register({required:true})}
                 defaultValue={props.data.nosavingReason}
                />
			   <label> What would inspire or help you to save? < span className='required'>*</span></label>
			   <TextField
			    id="outlined-multiline-static"
			    className={classes.container}
                  multiline
                 rowsMax={4}
                 variant="outlined"
			   name='inspirationToSave'
			   defaultValue={props.data.inspirationToSave}
			   inputRef={register({required:true})}
			   />
			    <label>What is the best means you would use to save?< span className='required'>*</span></label>
			    <span className='description'>A bank, an app, mobilemoney, friends, or ...</span>
			   <input
			   type='text'
			   name='meansToSave'
			   defaultValue={props.data.preferrablemeansToSave}
			   ref={register({required:true})}
			   />

			   </div>

			}
			    <div>
			   <label >Do you have an emergency fund?< span className='required'>*</span></label>
			   <span className='description'>its money you set aside, for sudden occasions that require quick & compulsory expenditure which wasn't planned before</span>
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
 export default compose(
 	withStyles(styles),
 	connect(mapStateToProps, actions)
 	)(Pagethree)