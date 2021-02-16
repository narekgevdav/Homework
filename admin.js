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






var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://111-3d-dev-ed.my.salesforce.com/services/data/v50.0/sobjects/lead/00Q4L000001OKhsUAG',
  headers: { 
    'Authorization': 'Bearer 00D4L000000Czzk!AQUAQC6i1x8bfPPV8LKW6ZTEtle6ToBo3V4_RmlNjE2wgBIhFpN2E9OMzbM4ciE.lid4a9G6oPBxypqsMl98Pn4LEMzoynrx', 
    'Cookie': 'BrowserId=BENdA2-BEeuDYxM-MLxcFA; webact=%7B%22l_vdays%22%3A-1%2C%22l_visit%22%3A0%2C%22session%22%3A1613477529764%2C%22l_search%22%3A%22%22%2C%22l_dtype%22%3A%22%22%2C%22l_page%22%3A%22SFDC%3Aus%3Alogin%22%2C%22counter%22%3A0%2C%22pv%22%3A1%2C%22f_visit%22%3A1613477529764%2C%22seg%22%3A%22non-customer%3Aus%22%7D; OptanonConsent=isIABGlobal=false&datestamp=Tue+Feb+16+2021+16%3A12%3A12+GMT%2B0400+(Armenia+Standard+Time)&version=5.11.0&landingPath=https%3A%2F%2Fc.salesforce.com%2Flogin-messages%2Fpromos.html&groups=1%3A1%2C3%3A1%2C4%3A1&hosts=; _ga=GA1.2.2113006915.1613477533; _gid=GA1.2.1008276292.1613477533; AMCVS_8D6C67C25245AF020A490D4C%40AdobeOrg=1; s_ecid=MCMID%7C04495128611100429074571554232344586670; AMCV_8D6C67C25245AF020A490D4C%40AdobeOrg=-1891778711%7CMCIDTS%7C18675%7CMCMID%7C04495128611100429074571554232344586670%7CMCAAMLH-1614082333%7C6%7CMCAAMB-1614082333%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1613484733s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-18682%7CvVersion%7C2.4.0; inst=APP_4L; rememberUn=false; com.salesforce.LocaleInfo=us; oinfo=c3RhdHVzPUZSRUUmdHlwZT0zJm9pZD0wMEQ0TDAwMDAwMEN6ems=; disco=4L:00D4L000000Czzk:0054L000000pRdu:1; autocomplete=1; sid=00D4L000000Czzk!AQUAQOzanZY40guPqZ0NWcqROj8pPoTqIutUIK_sEG3ohL.kHMWrAqCOYSDQmfZOWntcjc7.3U24ARYgAPU0NJ_wmPWGHWF2; sid_Client=L000000pRduL000000Czzk; clientSrc=212.34.242.162; oid=00D4L000000Czzk; 79eb100099b9a8bf=3:false:.salesforce.com'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

