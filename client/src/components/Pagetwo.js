import React  from  'react'
import { useForm ,Controller} from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel } from '@material-ui/core'
import {connect} from 'react-redux'


import * as actions from '../redux/actions/index.js'

function Pagetwo(props){

  const { register,handleSubmit,control } = useForm();



  //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.steptwo(data)
		//after ensuring the data has been authenticated can someone move to the next page
		props.handleNext()
	}
	//console.log(props.data)
		return (
			<div >
			  <div className='content'>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
			{/*Each field is required to have a unique name*/}
			   <div>
			   <label>Do you have any source of income? < span className='required'>*</span></label>
			    <Controller
        name="sourceOfIncome"
        control={control}
        defaultValue={props.data.sourceOfIncome}
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
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
         </RadioGroup>} 
      />
      
			   <label>What are the top 3 things you spend on every single day of your life?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='expenditureOne'
			   defaultValue={props.data.expenditureOne}
			   ref={register({required:true})}
			   className='expenditure'
			   />
               <input
			   type='text'
			   name='expenditureTwo'
			   defaultValue={props.data.expenditureTwo}
			   className='expenditure'
			   ref={register({required:true})}
			   />

               <input
			   type='text'
			   name='expenditureThree'
			   defaultValue={props.data.expenditureThree}
			   className='expenditure'
			   ref={register({required:true})}
			   />
			   </div>
			    <div>
			   <label >Do you  save? < span className='required'>*</span></label>
                   <Controller
        name="save"
        control={control}
        defaultValue={props.data.save}
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
         </RadioGroup>} 
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
		data:state.two
	}

}
// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pagetwo)