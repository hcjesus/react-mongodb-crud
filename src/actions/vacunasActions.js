import {MOSTRAR_VACUNA, ELIMINAR_VACUNA, EDITAR_VACUNA, AGREGAR_VACUNA} from './types';

import axios from 'axios';

const urlDB = "http://localhost:4000/vacunas";


export const agregarVacuna = vacuna => async dispatch => {	
	const respuesta = await axios.post(urlDB,vacuna);
	dispatch ({
		type:AGREGAR_VACUNA,
		payload:respuesta.data
	})
}

export const eliminarVacuna = id => async dispatch => {
	const respuesta = await axios.delete(`${urlDB}/${id}`);
	dispatch({
		type:ELIMINAR_VACUNA,
		payload:id
	})
}

export const actualizarVacuna = vacuna  => async dispatch=> {
	const respuesta = await axios.put(`${urlDB}/${vacuna._id}`,vacuna);
	dispatch({
		type:EDITAR_VACUNA,
		payload:respuesta.data
	})
} 

export const mostrarVacuna = id => async dispatch=>{
	const respuesta = await axios.get(`${urlDB}/${id}`);
	console.log("respuesta.data",respuesta.data);
	dispatch({
		type:MOSTRAR_VACUNA,
		payload:respuesta.data
	})
}