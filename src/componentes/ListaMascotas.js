import React, { useState, useEffect } from 'react';
import {mostrarMascotas} from '../actions/mascotasActions';
import Mascota from './Mascota';
import EditarModal from './EditarModal';

import Typography from '@material-ui/core/Typography';

import {Grid,Paper,TableContainer, Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';

import {useSelector,useDispatch} from 'react-redux';

import {useStyles}	from './Theme'; 	

const ListaMascotas = (props) => {
	const classes = useStyles();

	const dispatch = useDispatch();
	
	useEffect(()=>{
		dispatch(mostrarMascotas());
	},[]);

	const [show, setOpen] = useState(false);
	const [mascota, setMascota] = useState([]);

  	const handleOpen = (info) => {
  		setMascota({info});
    	setOpen(true);
    		
  	};

  	const handleClose = () => {
    	setOpen(false);
  	};

  	console.log("mascota.infomascota.info",mascota.info);
	const {mascotas} = useSelector(state => state.mascotas);

		return (
			<Grid container justify="center" className={classes.root}>
				<Grid item container xs={12} md={6} justify="center" >
					<TableContainer component={Paper}>
				      <Table aria-label="simple table">
				        <TableHead className={classes.tableHead}>
				          <TableRow>
				            <TableCell align='center'><Typography variant="h6" >Mascota</Typography></TableCell>
				            <TableCell align="center"><Typography variant="h6" >Raza</Typography></TableCell>
				            <TableCell align="center"><Typography variant="h6" >Dueño</Typography></TableCell>
				            <TableCell align="center"><Typography variant="subtitle1" >Editar</Typography></TableCell>
				            <TableCell align="center"><Typography variant="subtitle1" >Eliminar</Typography></TableCell>
				          </TableRow>
				        </TableHead>
				        <TableBody>
				        	{mascotas.map(mascota => (
				        		<Mascota
				        			key={mascota._id}
				        			mascota={mascota}
				        			handle={handleOpen}
				        		/>
				        	))}
				        </TableBody>
				      </Table>
				    </TableContainer>
				    { show ? <EditarModal show={show} handle={handleClose} info={mascota.info}/> : <div></div>}
				</Grid>
			</Grid>
		)
	
}

export default ListaMascotas;