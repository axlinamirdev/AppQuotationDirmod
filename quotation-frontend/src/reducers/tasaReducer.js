import { 
	COTIZAR_DOLAR, 
	COTIZAR_EURO, 
	COTIZAR_REAL,
	ERROR_COTIZAR
} from "../types/tasaType"

const INITIAL_STATE = {
	loading: false,
	tasaDolar: {moneda: "dolar", precio: 0},
	tasaEuro: {},
	tasaReal: {},
	error: ""
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case COTIZAR_DOLAR:
			return {
				...state,
				tasaDolar: action.payload
			}
		case COTIZAR_EURO:
			return {
				...state,
				tasaEuro: action.payload
			}
		case COTIZAR_REAL:
			return {
				...state,
				tasaReal: action.payload
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