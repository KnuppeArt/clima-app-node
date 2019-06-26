const axios = require('axios')


const getLugarLatLng = async ( dir ) => {

  // Escapamos el caracter para no tener problema con los epacios ej: "New York"
  const encodeUrl = encodeURI( dir )
  
  
  // configurando el header
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: {'X-RapidAPI-Key': '2ac6db0ceamsh7363786c210e78cp18adf9jsn914487694fad'}
  });
  
  const resp = await instance.get()

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${ dir }`)
  }


  const data = resp.data.Results[0]
  const direccion = data.name
  const lat = data.lat
  const lon = data.lon

  return {
    direccion,
    lat , 
    lon 
  }

}


module.exports = {
  getLugarLatLng
}