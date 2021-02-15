import express, { application, json, response } from "express"
import cors from "cors"
import axios from "axios"
import qs from "querystring"


const app = express()
const port = 3000

app.use(json())
app.use(cors())

app.listen(port, ()=> console.log(`Server is running on port ${port}`))

const data = qs.stringify({
    'response_type': 'token',
   'client_id': '3MVG9I9urWjeUW07ubZquOy.1olEF2UaPnIG1fxoxxhBWO8aB2Y1i2hNo_6ZdUmP47D0oOLQiqLTc7XYu4xFd',
   'redirect_uri': 'http://localhost:3000/',
   'state': 'mystate' 
   });
   const config = {
     method: 'post',
     url: 'https://login.salesforce.com/services/oauth2/authorize',
     headers: { 
       'Content-Type': 'application/x-www-form-urlencoded',        
     },
     data : data
   };
   

app.get("/", async(req,res)=> {
    try {
        const response = await axios(config)
       // console.log(response.data)            
        res.send(response.data)
       
    } catch(e){
        console.log(e)
    }
})



