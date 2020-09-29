import {combineReducers} from 'redux';
import mascotasReducers from './mascotasReducers';
import citasReducers from './citasReducers';
import vacunasReducers from './vacunasReducer';

export default combineReducers({
	mascotas: mascotasReducers,
	citas:citasReducers,
	vacunas:vacunasReducers,
});