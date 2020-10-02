const baseURL =
  process.env.REACT_APP_API_URL || 'https://localhost:44301/cotizacion'


const API = {
	get(endPoint) {
		return fetch(`${baseURL}/${endPoint}`)
				.then(response => response.json())
	  }
}


export default API