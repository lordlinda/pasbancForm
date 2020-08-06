import React  from  'react'
import { useForm ,Controller} from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel } from '@material-ui/core'
import {connect} from 'react-redux'


import * as actions from '../redux/actions/index.js'

function Pageone(props){

  const {handleSubmit,control } = useForm();



  //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepone(data)
		//after ensuring the data has been authenticated can someone move to the next page
		props.handleNext()
	}
	//console.log(props.data)
		return (
			<div >
			  <div className='content'>
			  <div className='message'> 
        At pasbanc we believe that everyone should be able to create & manage wealth, and we want to make the best way for everyone to do just that.
       <br />But this requires some specific knowledge about what must be addressed to make it possible.<br />
        However, you filling us in with some basic information is a very big step towards getting it done. Please enjoy
               </div>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
			{/*Each field is required to have a unique name*/}
			   
			   <label>Do you have any source of income? < span className='required'>*</span></label>
			    <span className='description'>Someway money gets to you.</span>
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
			  
               <button className='next'>Next</button>
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