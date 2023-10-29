import { localhost } from "./config";
import axios from 'axios'

export const makeUnauthenticatedPostRequest = async (route, body) => {
console.log(localhost + route)
const res =await  axios.post(localhost + route, body, {
  headers: {
    'Content-Type': 'application/json',
  }, 
})
  return res;
}
