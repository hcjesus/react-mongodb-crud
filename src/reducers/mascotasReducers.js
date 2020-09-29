import {MOSTRAR_MASCOTAS, MOSTRAR_MASCOTA, ELIMINAR_MASCOTA, EDITAR_MASCOTA, AGREGAR_MASCOTA} from '../actions/types';

const initialState = {
	mascotas:[],
	mascota:[]
}

export default function(state=initialState, action){
	switch (action.type) {
		case MOSTRAR_MASCOTAS:
			return{
				...state,
				mascotas:action.payload
			}
		case AGREGAR_MASCOTA:
			return{
				...state,
				mascotas:[...state.mascotas,action.payload]
			}
		case ELIMINAR_MASCOTA:
			return{
				...state,
				mascotas: state.mascotas.filter(mascota => mascota._id !== action.payload)
			}
		case EDITAR_MASCOTA:
			return{
				...state,
				mascotas: state.mascotas.map(mascota => mascota._id === action.payload._id ? (mascota = action.payload) : mascota)
			}
		case MOSTRAR_MASCOTA:		
		return{
			...state,
			mascota: action.payload
		}				
		default:
			return state;
	}
} 