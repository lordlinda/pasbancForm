import React from  'react'
import { useForm ,Controller} from "react-hook-form"
import {Radio,RadioGroup,FormControlLabel} from '@material-ui/core'
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'


function Pagefive(props){
  const { register,handleSubmit,control} = useForm();

    //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepfive(data)
		//after ensuring the data has been authenticated can someone move to the next page		
		props.handleNext()
	}
//console.log(props)
		return (
			<div >
			  <div className='content'>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

			{/*Each field is required to have a unique name*/}
			{/*the options are yes or no and the questions are accordingly based on the options as shown below*/}
			{
				props.investments === 'yes' ?
				<div>
			   <label>Why do you invest?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='investmentReason'
			   defaultValue={props.data.investmentReason}
			   ref={register({required:true})}
			   />

			   <label>How do you invest?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='investmentWay'
			   defaultValue={props.data.investmentWay}
			   ref={register({required:true})}
			   />

			   </div>
				:
				<div>
			   <label>How is it that you don't have any investments?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='noinvestmentReason'
			   defaultValue={props.data.noinvestmentReason}
			   ref={register({required:true})}
			   />

			   <label>What would help you or inspire you to start investing?< span className='required'>*</span></label>
			   <input
			   type='text'
			   name='inspirationForInvestment'
			   defaultValue={props.data.inspirationForInvestment}
			   ref={register({required:true})}
			   />

			   </div>

			}
			   <label >Do you have any form of insurance?< span className='required'>*</span></label>
                          <Controller
        name="insurance"
        control={control}
        defaultValue={props.data.insurance}
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

			     <button className='next prev'>Next</button>
			   </form>
			  <button className='next'onClick={props.handleBack}>Prev</button>
			  </div>
			</div>
			)

}

function mapStateToProps(state){
	return {
		data:state.five,
		investments:state.four.investments
	}

}
// Connect your component with redux
 export default connect(mapStateToProps, actions)(Pagefive)