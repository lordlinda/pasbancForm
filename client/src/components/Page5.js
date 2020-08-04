import React from  'react'
import { useForm ,Controller} from "react-hook-form"
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
    const {classes}=props
		return (
			<div >
			  <div className='content'>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

			{/*Each field is required to have a unique name*/}
			{/*the options are yes or no and the questions are accordingly based on the options as shown below*/}
			{
				props.investments === 'yes' ?
				<div>
			   <label>Why is it that you are invested?< span className='required'>*</span></label>
			   <span className='description'>Why invest?</span>
			   <input
			   type='text'
			   name='investmentReason'
			   defaultValue={props.data.investmentReason}
			   ref={register({required:true})}
			   />

			   <label>How do you invest?< span className='required'>*</span></label>
			   <span className='description'>Through business, the bank, an app, cooperative, or ?? </span>
			   <TextField
			   className={classes.container}
			   type='text'
			    id="outlined-multiline-static"
                multiline
                rowsMax={4}
                variant="outlined"
			   name='investmentWay'
			   defaultValue={props.data.investmentWay}
			   inputRef={register({required:true})}
			   />
                 <label>In which ways or fields do you plan to expand your investing?< span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='preferrableinvestmentFields'
			   defaultValue={props.data.preferrableinvestmentFields}
			   inputRef={register({required:true})}
			   />
			   </div>
				:
				<div>
			   <label>Why is it that you don't have any investment?
			   < span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='noinvestmentReason'
			   defaultValue={props.data.noinvestmentReason}
			   inputRef={register({required:true})}
			   />

			   <label>What would inspire or help you to get started?
			   < span className='required'>*</span></label>
			   <TextField
			   className={classes.container}
			   type='text'
			   id="outlined-multiline-static"
               multiline
               rowsMax={4}
               variant="outlined"
			   name='inspirationForInvestment'
			   defaultValue={props.data.inspirationForInvestment}
			   inputRef={register({required:true})}
			   />

			     <label> What is the best possible way to invest that you would go for ?
			     < span className='required'>*</span></label>
			     <span className='description'>business, the bank, an app, cooperative, stocks or ??</span>
			   <input
			   type='text'
			   name='preferrableInvestmentWay'
			   defaultValue={props.data.preferrableInvestmentWay}
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
 export default compose(
 	withStyles(styles),
 	connect(mapStateToProps, actions)
 	)(Pagefive)