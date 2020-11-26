import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt_access_token')}`
}

// export function getToken() {
//   var token = null;
//   if (localStorage.getItem('persist:demo3-auth') != null) {
//     token = JSON.parse(localStorage.getItem('persist:demo3-auth')).authToken;
//     if (token != undefined)
//       var token = token.replace(/['"]+/g, '');
//     else
//       token = null;
//   }
//   return token;
// }
// export function setLocalStorageItem(key, value) {
//   let data = {};
//   if (localStorage.getItem('airbook-custom') != null)
//     data = JSON.parse(localStorage.getItem('airbook-custom'));
//   data[key] = value;
//   localStorage.setItem('airbook-custom', JSON.stringify(data));
// }

// export function removeLocalStorage() {
//   localStorage.removeItem('persist:demo3-auth');
//   document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
// }

export default function list(endpoint, params={}) {
	let config = {
	  headers: headers,
	  params: params,
	}
	return axios.get(API_URL + endpoint, config).then(response => {
		if(response.data.results !== undefined) {
			// pagination response handling there :)
			response.extra_data = {
				count : response.data.count,
				next : response.data.next,
				previous : response.data.previous,
			}
			response.data = response.data.results;
    }
		return response;
	})
}

// export function patch(endpoint, data) {
//   let config = {
//     headers: headers,
//   }
//   return axios.patch(API_URL + endpoint, data, config)
// }

export function post(endpoint, data) {
  let config = {
    headers: headers,
  }
  return axios.post(API_URL + endpoint, data, config)
}

// export function del(endpoint, data = {}) {
//   let config = {
//     headers: headers,
//     data: data,
//   }
//   return axios.delete(API_URL + endpoint, config)
// }
// }