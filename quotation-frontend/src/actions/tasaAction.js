import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	ERROR_COTIZAR,
	LOADING_DOLAR,
	LOADING_EURO,
	LOADING_REAL,
	ERROR_COTIZAR_DOLAR,
	ERROR_COTIZAR_EURO,
	ERROR_COTIZAR_REAL
} from "../types/tasaType"

export const fetchTasaDolar = () => (dispatch, getState) => {

	dispatch({
			type:LOADING_DOLAR
		}) 
	fetch(`https://localhost:44301/cotizacion/dolar`)
        .then(response => response.json())
        .then(data => {
        	dispatch({
					type:COTIZAR_DOLAR,
					payload: data
				})          
        })
        .catch(error => {
            dispatch({
				type:ERROR_COTIZAR_DOLAR,
				payload: "No se encontró la tasa"
			})
        })
}

export const fetchTasaEuro = () => (dispatch, getState) => {

	dispatch({
			type:LOADING_EURO
		}) 
	fetch(`https://localhost:44301/cotizacion/euro`)
        .then(response => response.json())
        .then(data => {
        	dispatch({
					type:COTIZAR_EURO,
					payload: data
				})          
        })
        .catch(error => {
            dispatch({
				type:ERROR_COTIZAR_EURO,
				payload: "No se encontró la tasa"
			})
        })
}

export const fetchTasaReal = () => (dispatch, getState) => {

	dispatch({
			type:LOADING_REAL
		}) 
	fetch(`https://localhost:44301/cotizacion/real`)
        .then(response => response.json())
        .then(data => {
        	dispatch({
					type:COTIZAR_REAL,
					payload: data
				})          
        })
        .catch(error => {
            dispatch({
				type:ERROR_COTIZAR_REAL,
				payload: "No se encontró la tasa"
			})
        })
}