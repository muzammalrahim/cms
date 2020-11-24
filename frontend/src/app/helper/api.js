import axios from 'axios';

const LOGIN_URL = "adm/token/"
const ME_URL = "adm/users/me"

// export const headers = {
//     'Content-Type': 'application/json',
//     // 'Authorization': 'Token 2f2b7961077264b154a140b3111d2063add5f442'
//   }

export default function login(username, password) {
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { username, password })
}
// let config ={
//     header
// }
export function me(Authorization) {
    return axios.get(process.env.REACT_APP_API_URL + ME_URL,  {
        headers: {
           Authorization: `Bearer ${Authorization.access}` ,
           'Content-Type': 'application/json'
        }
  })
}