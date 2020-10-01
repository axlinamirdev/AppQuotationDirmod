import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	ERROR_COTIZAR
} from "../types/tasaType"

export const fetchTasaDolar = () => (dispatch, getState) => {
	try
	{
		dispatch({
			type:COTIZAR_DOLAR,
			payload: {
				moneda: "dolar",
				precio: "400.00"
			}
		})
	}
	catch(error)
	{
		dispatch({
			type:ERROR_COTIZAR,
			payload: error.message
		})
	}
}