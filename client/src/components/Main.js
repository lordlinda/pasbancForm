import React from 'react'
import {Stepper} from '@material-ui/core'
import {connect} from 'react-redux'


import Pageone from './Page1.js'
import Pagetwo from './Page2.js'
import Pagethree from './Page3.js'
import Pagefour from './Page4.js'
import Pagefive from './Page5.js'
import Pagesix from './Page6.js'
import Pageseven from './Page7.js'
import Message from './EndMessage.js'
import * as actions from '../redux/actions/index.js'


//this function shows up the number of steps to complete the multi-step form
function getSteps() {
  return ['step 1', 'step 2', 'step 3','step 4','step 5','step 6','step 7'];
}




function Main(props){

  function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Pageone handleNext={handleNext}/>;
    case 1:
      return <Pagetwo handleBack={handleBack} handleNext={handleNext}/>;
    case 2:
      return <Pagethree handleBack={handleBack} handleNext={handleNext}/>;
     case 3:
     return <Pagefour handleBack={handleBack} handleNext={handleNext}/> ;
     case 4:
     return <Pagefive handleBack={handleBack} handleNext={handleNext}/>
     case 5:
     return <Pagesix handleBack={handleBack} handleNext={handleNext}/>;
      case 6:
     return <Pageseven handleBack={handleBack} handleNext={handleNext}/>;
    default:
      return 'Unknown stepIndex';
  }
}
		//here we are initiaising our state of the activestep
	//remember it is zero based that is why our initila activeStep is zero
   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   //this is the function that runs when a user presses next,it takes
   //in the previous active step and adds one
    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  //this is the function that runs when you press previous,it gets the active step
  //and subtracts one
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 const Reset=()=>{
  //console.log('data sent')
 
  //this resets all the data back to empty strings
  props.reset()
  //we send it back to the first step
  setActiveStep(0)
 }


	return(
		<div className='container'>
		  <h2 className='title'>Pasbanc Wealth Form</h2>
         <div>
		 <div>
			{/*what you see below here are the headers which indicate the progress of the user
			   actually it is all in the StepLabel so it is very key to maintain it
		       the number of steps depends on the array and function get steps*/}
			   <Stepper activeStep={activeStep} alternativeLabel>
      </Stepper>
      </div>
       <div>
        {activeStep === steps.length ? (
          <div>
           <Message />
          </div>
        ) : (
          <div>
        {/*handleSubmit only shows errors on submission*/}

            {getStepContent(activeStep)}
          </div>
        )}
      </div>
      </div>
		</div>

		)
}

// Connect your component with redux
 export default connect(null,actions)(Main)