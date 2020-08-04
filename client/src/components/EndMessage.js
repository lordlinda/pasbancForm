import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'

class EndMessage extends Component{
	componentDidMount(){
	//console.log(this.props.formdata)
	this.props.getData(this.props.formdata)
}
	render(){
		return (
			 <div className='content message'>
			 Thank you for your best cooperation on this,your answers to these questions  provides the basic vital information that is key to working with us
			  </div>
			)
	}
}

function mapStateToProps(state){
  return {
    formdata:state
  }
}
export default connect(mapStateToProps,actions)(EndMessage)