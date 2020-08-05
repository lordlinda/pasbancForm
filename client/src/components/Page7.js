import React  from  'react'
import { useForm} from "react-hook-form"
import {TextField,withStyles} from '@material-ui/core'
import {connect} from 'react-redux'
import {compose} from  'redux'

import * as actions from '../redux/actions/index.js'

const styles ={
  container:{
    width:'100%',
    margin:'12px 0px'
  }
}

function Pageseven(props){

  const {handleSubmit,register } = useForm();



  //this function submits all our data
	const onSubmit=(data)=>{
		//console.log(data)
		//so we are sending our data to the global store
		props.stepseven(data)
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
			</div>
			)

}

function mapStateToProps(state){
	return {
		data:state.seven
	}

}
// Connect your component with redux
export default compose(
  withStyles(styles),
  connect(mapStateToProps,actions)
  )(Pageseven)