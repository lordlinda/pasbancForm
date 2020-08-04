//this is root reducer we call it so because it is the place to combine all our reducers
//which contain parts of state before we send them  to the store
import  {combineReducers} from 'redux'
import steponeReducer from './stepone.js'
import steptwoReducer from './steptwo.js'
import stepthreeReducer from './stepthree.js'
import stepfourReducer from './stepfour.js'
import stepfiveReducer from './stepfive.js'
import stepsixReducer from './stepsix.js'
import stepsevenReducer from './stepseven.js'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
	one:steponeReducer,
	two:steptwoReducer,
	three:stepthreeReducer,
	four:stepfourReducer,
	five:stepfiveReducer,
	six:stepsixReducer,
	seven:stepsevenReducer
})
export default rootReducer