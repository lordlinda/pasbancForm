import React,{Component} from 'react'
import {connect} from 'react-redux'



class EndMessage extends Component{
	componentDidMount(){
	console.log(this.props.formdata)
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
export default connect(mapStateToProps)(EndMessage)