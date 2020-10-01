import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	ERROR_COTIZAR,
	LOADING_DOLAR,
	LOADING_EURO,
	LOADING_REAL
} from "../types/tasaType"

const INITIAL_STATE = {
	loadingDolar: false,
	tasaDolar: {moneda: "dolar", precio: 0},
	loadingEuro: false,
	tasaEuro: {moneda: "euro", precio: 0},
	loadingReal: false,
	tasaReal: {moneda: "real", precio: 0},
	error: ""
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case COTIZAR_DOLAR:
			return {
				...state,
				tasaDolar: action.payload,
				loadingDolar: false
			}
		case COTIZAR_EURO:
			return {
				...state,
				tasaEuro: action.payload,
				loadingEuro: false
			}
		case COTIZAR_REAL:
			return {
				...state,
				tasaReal: action.payload,
				loadingReal: false
			}
		case LOADING_DOLAR:
			return {
				...state,
				loadingDolar: true
			}
		case LOADING_EURO:
			return {
				...state,
				loadingEuro: true
			}
		case LOADING_REAL:
			return {
				...state,
				loadingReal: true
			}
		case ERROR_COTIZAR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default: return state
	}
}