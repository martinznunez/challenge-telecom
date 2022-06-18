
import axios from 'axios'

export const getCity = (city) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&&appid=${process.env.REACT_APP_ACCESS_KEY}`)
}
