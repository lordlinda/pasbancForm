//this is our main backend file
//first we import our modules
const express =require('express')
const bodyParser=require('body-parser')
const morgan =require('morgan')
const path=require('path')
const cors =require('cors')
const mongoose=require('mongoose')
const dotenv =require('dotenv')

dotenv.config()
//connect to the mongo database
mongoose.connect('mongodb://localhost/formdb' || process.env.MONGODB_URI,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(console.log('connected to mongodb successfully'))
.catch(err=>console.log('just an issue with mongo'))
//then we instatiate the express app
//we are calling it app ,a function of app
const app=express()
app.use(cors())
//next we put the  our middlewares
//this ones have to be placed before the routes
//e.g body parser allows us to access data from the frontend  using req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//and some others like cors,morgan,dotenv etc
//some middlewares such as morgan that is only allowed to run while our app is in developement
//but in production  it doesnt run
//we do this depending on the node environment constatnt NODE_ENV
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'))
}

//next we go to our routes ,the routes will not be  in this file but will be referenced
//that when a certain route is typed we are redirected to the  the routes page
app.use('/user',require('./routes/form.js'))
//next we serve static files from the  frontend which are in the build folder
//however this should only be served during deployment and not production
if(process.env.NODE_ENV === 'production'){
	  app.use(express.static(path.join(__dirname,'client/build')))
	 // Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname,'client/build/index.html'));
});

}

//after our routes then we listen at the port
//we dont hard code the  port because on deployment because the port may change depending on the port assigned
const port = process.env.PORT || 5000

app.listen(port,console.log(`server is listening to ${port}`))