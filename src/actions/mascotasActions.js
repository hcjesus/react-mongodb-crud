import {MOSTRAR_MASCOTAS, MOSTRAR_MASCOTA, ELIMINAR_MASCOTA, EDITAR_MASCOTA, AGREGAR_MASCOTA} from './types';

import axios from 'axios';

//const urlDB = "http://localhost:4000/mascotas";

const urlDB = "https://restful-api-v.herokuapp.com/mascotas";

export const mostrarMascotas = () => async dispatch => {
	const respuesta = await axios.get(urlDB);
	dispatch({
		type:MOSTRAR_MASCOTAS,
		payload:respuesta.data
	})
};

export const agregarMascota = mascota => async dispatch => {	
	const respuesta = await axios.post(urlDB,mascota);
	dispatch ({
		type:AGREGAR_MASCOTA,
		payload:respuesta.data
	})
}

export const eliminarMascota = id => async dispatch => {
	const respuesta = await axios.delete(`${urlDB}/${id}`);
	dispatch({
		type:ELIMINAR_MASCOTA,
		payload:id
	})
}

export const actualizarMascota = mascota  => async dispatch=> {
	const respuesta = await axios.put(`${urlDB}/${mascota._id}`,mascota);
	dispatch({
		type:EDITAR_MASCOTA,
		payload:respuesta.data
	})
} 

export const mostrarMascota = id => async dispatch=>{
	const respuesta = await axios.get(`${urlDB}/${id}`);
	console.log("respuesta.data",respuesta.data);
	dispatch({
		type:MOSTRAR_MASCOTA,
		payload:respuesta.data
	})
}