import {MOSTRAR_CITAS, ELIMINAR_CITA, AGREGAR_CITA} from "./types";
import axios from "axios";

//const urlDB = "http://localhost:4000/citas";

const urlDB = "https://restful-api-v.herokuapp.com/citas";

export const mostrarCitas = () => async dispatch =>{
	const respuesta = await axios.get(urlDB);
	dispatch({
		type:MOSTRAR_CITAS,
		payload: respuesta.data
	})
}

export const agregarCita = cita => async dispatch =>{
	const respuesta = await axios.post(urlDB,cita);
	dispatch({
		type:AGREGAR_CITA,
		payload: respuesta.data
	})
}

export const eliminarCita = id => async dispatch =>{
	const respuesta = await axios.delete(`${urlDB}/${id}`);
	dispatch({
		type:ELIMINAR_CITA,
		payload:id
	})
}