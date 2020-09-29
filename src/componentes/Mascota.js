import React from 'react';

import {Button,TableRow,TableCell} from '@material-ui/core';
import {Delete,Edit} from '@material-ui/icons';

import {useDispatch} from 'react-redux';

import {eliminarMascota} from '../actions/mascotasActions'; 

import {useStyles} from './Theme';

const Mascota = (props) => {
	const classes = useStyles();
	const {nombre, raza,edad,especie, sexo, peso, propietario,_id} = props.mascota;
	const dispatch = useDispatch();
	const deleteMascota = () =>{
		//console.log(_id);
		dispatch(eliminarMascota(_id));
	}
	const info = {
		nombre,
		raza,
		edad,
		especie,
		sexo,
		propietario,
		peso,
		_id
	}

    return (
        <TableRow>
			<TableCell align="center">{nombre}</TableCell>
			<TableCell align="center">{raza}</TableCell>
			<TableCell align="center">{propietario}</TableCell>
			<TableCell align="center"><Button variant="contained" onClick={() => props.handle(info)} className={classes.buttonback}><Edit/></Button></TableCell>
			<TableCell align="center"><Button variant="contained" onClick={deleteMascota}><Delete/></Button></TableCell>
		</TableRow>
    );
};


export default Mascota;
