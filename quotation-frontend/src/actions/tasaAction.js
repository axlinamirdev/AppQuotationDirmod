import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	ERROR_COTIZAR
} from "../types/tasaType"

export const fetchTasaDolar = (moneda) => (dispatch, getState) => {

	fetch(`https://localhost:44301/cotizacion/${moneda}`)
        .then(response => response.json())
        .then(data => {
        	const { moneda } = data

        	if(moneda==="dolar"){
        		dispatch({
					type:COTIZAR_DOLAR,
					payload: data
				})
        	}else if(moneda==="euro"){
        		dispatch({
					type:COTIZAR_EURO,
					payload: data
				})
        	}else if(moneda==="real"){
        		dispatch({
					type:COTIZAR_REAL,
					payload: data
				})
        	}             
        })
        .catch(error => {
            dispatch({
				type:ERROR_COTIZAR,
				payload: "No se encontro el pokemon"
			})
        })
}