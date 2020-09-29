import {MOSTRAR_CITAS, MOSTRAR_CITA, ELIMINAR_CITA,AGREGAR_CITA} from '../actions/types';

const initialState = {
	citas:[]
}

export default function(state=initialState, action){
	switch (action.type) {
		case MOSTRAR_CITAS:
			return{
				...state,
				citas:action.payload
			}
		case AGREGAR_CITA:
			return{
				...state,
				citas:[...state.citas,action.payload]
			}
		case ELIMINAR_CITA:
			return{
				...state,
				citas: state.citas.filter(cita => cita._id !== action.payload)
			}		
		default:
			return state;
	}
} 