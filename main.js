const axios = require('axios');
const url=(`https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=${process.env.APP_ID}`)
axios.get(url)
// axios.get('https://google.com')
 .then(res =>{
    console.log(res.data.main.temp)
 })
 .catch(error=>{
    console.log(error)
 })