import {MOSTRAR_VACUNA, ELIMINAR_VACUNA, EDITAR_VACUNA, AGREGAR_VACUNA} from '../actions/types';

const initialState = {
	vacunas:[],
	vacuna:[]
}

export default function(state=initialState, action){
	switch (action.type) {		
		case AGREGAR_VACUNA:
			return{
				...state,
				vacunas:[...state.vacunas,action.payload]
			}
		case ELIMINAR_VACUNA:
			return{
				...state,
				vacunas: state.vacunas.filter(vacuna => vacuna._id !== action.payload)
			}
		case EDITAR_VACUNA:
			return{
				...state,
				vacunas: state.vacunas.map(vacuna => vacuna._id === action.payload._id ? (vacuna = action.payload) : vacuna)
			}
		case MOSTRAR_VACUNA:		
		return{
			...state,
			vacunas: action.payload
		}				
		default:
			return state;
	}
} 