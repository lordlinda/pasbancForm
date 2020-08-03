//this is our global store where  we keep our state
import {createStore,applyMiddleware} from  'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index.js'
//in our store we have three components the main reducer with all our different parts of state,an empty object
//with  for all the state combined and redux thunk that  allows us to use dispatch method for async calls for eaxmple 
//while dealing with the backend
//it is wrapped in  applyMiddleware because it is a middleware
const store = createStore(rootReducer,{},applyMiddleware(thunk))
export default store