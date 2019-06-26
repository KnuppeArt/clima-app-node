const axios = require('axios')

const getClima =  async ( lat, lon ) => {

  const resp = await axios.get(` https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`)
  
  //en axios el objeto de respuesta se llama data
  return resp.data.main.temp

}

module.exports = {
  getClima
}