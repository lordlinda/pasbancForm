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
			 Thankyou for your honest cooperation in this, your answers
			  are key to unlocking the best way to create and manage wealth for everyone.
              <br />We hope to get in touch with you soon. Your blessed.
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