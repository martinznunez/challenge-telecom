
import axios from 'axios'

export const location = () => {
  return axios.get('http://ip-api.com/json/')
}
