import axios from 'axios'
//this contains our action creators that dispatch actions to reducers instructing them what to do


//so for each step along the way we want to  to keep the data we collected
//such that we can ensure it persists
/*this is for the first step*/
export const stepone=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'stepone',
			payload:data
		})
	}
}
/*this is for the second step*/

export const steptwo=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'steptwo',
			payload:data
		})
	}
}
/*this is for the third step*/
export const stepthree=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'stepthree',
			payload:data
		})
	}
}

/*this is for the forth step*/
export const stepfour=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'stepfour',
			payload:data
		})
	}
}

/*this is for the fifth step*/
export const stepfive=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'stepfive',
			payload:data
		})
	}
}

/*this is for the sixth step*/
export const stepsix=(data)=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'stepsix',
			payload:data
		})
	}
}

/*this is for the reset*/
export const reset=()=>{
	return dispatch=>{
		//console.log(data)
		dispatch({
			type:'reset',
			payload:''
		})
	}
}

/*this is responsible for sending data to the backend*/
export const getData=(data)=>{
	//console.log(data)
	return async dispatch=>{
		await axios
		.post('/user',data)
		.then(res=>{
			console.log(res.data)
		})

	}
}