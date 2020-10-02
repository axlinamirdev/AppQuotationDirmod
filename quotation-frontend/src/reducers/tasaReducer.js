import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	LOADING_DOLAR,
	LOADING_EURO,
	LOADING_REAL,
	ERROR_COTIZAR_DOLAR,
	ERROR_COTIZAR_EURO,
	ERROR_COTIZAR_REAL
} from "../types/tasaType"

const INITIAL_STATE = {
	loadingDolar: false,
	tasaDolar: {moneda: "dolar", precio: 0},
	errorDolar:"",
	loadingEuro: false,
	tasaEuro: {moneda: "euro", precio: 0},
	errorEuro:"",
	loadingReal: false,
	tasaReal: {moneda: "real", precio: 0},
	errorReal: ""
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case COTIZAR_DOLAR:
			return {
				...state,
				tasaDolar: action.payload,
				loadingDolar: false,
				errorDolar: ""
			}
		case COTIZAR_EURO:
			return {
				...state,
				tasaEuro: action.payload,
				loadingEuro: false,
				errorEuro: ""
			}
		case COTIZAR_REAL:
			return {
				...state,
				tasaReal: action.payload,
				loadingReal: false,
				errorReal:""
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
		case ERROR_COTIZAR_DOLAR:
			return {
				...state,
				loadingDolar: false,
				errorDolar: action.payload
			}
		case ERROR_COTIZAR_EURO:
			return {
				...state,
				loadingEuro: false,
				errorEuro: action.payload
			}
		case ERROR_COTIZAR_REAL:
			return {
				...state,
				loadingReal: false,
				errorReal: action.payload
			}
		default: return state
	}
}