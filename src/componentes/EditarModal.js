import React,{useState} from 'react'
import Modal from '@material-ui/core/Modal';
import {TextField,Grid,Divider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';

import {useStyles} from './Theme';

import {actualizarMascota} from '../actions/mascotasActions';



const EditarModal = (props) => {
	const classes = useStyles();

	const {nombre,edad,raza,sexo,propietario,especie,peso,_id} = props.info;

	const[dis,setDis] = useState(true);

	const [values, setValues] = useState({
		nombre,
		raza,
		edad,
		especie,
		sexo,
		propietario,
		peso,
		_id
	});
	const dispatch = useDispatch();

	const updateMascota = (e) =>{
		e.preventDefault();
		dispatch(actualizarMascota(values));
		props.handle();
	}
	const handleChangeForm = (e) => {
		setDis(false);
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	return (
		<React.Fragment>
			<Modal
		        open={props.show}
		        className={classes.modal}
		        onClose={props.handle}
		        aria-labelledby="simple-modal-title"
		        aria-describedby="simple-modal-description"
		    >
		    <div  className={classes.paper}>
		    	<form onSubmit={updateMascota} autoComplete="off">
		    		<Typography variant="h5" className={classes.header}>Datos de la mascota</Typography>
								<Grid container justify="space-around">
									<Grid item xs={12} md={5}>										
										<TextField										
											defaultValue={nombre || ''}
											className={classes.inputField}
											fullWidth
											name="nombre"
										    label="Nombre"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={raza}
										    className={classes.inputField}
										    fullWidth
										    label="Raza"
										    name="raza"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={edad}
										    className={classes.inputField}
										    fullWidth
										    label="Edad"
										    name="edad"
										    onChange={handleChangeForm}
										    variant="outlined"
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={especie}
										    className={classes.inputField}
										    fullWidth
										    label="Especie"
										    name="especie"	
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>										
									</Grid>
									<Divider orientation="vertical" flexItem />
									<Grid item xs={12} md={5}>									
										
										<TextField
											defaultValue={sexo}
										    className={classes.inputField}
										    fullWidth
										    label="Sexo"
										    name="sexo"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={propietario}
										    className={classes.inputField}
										    fullWidth
										    label="Propietario"
										    name="propietario"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={peso}
										    className={classes.inputField}
										    fullWidth
										    label="Peso"
										    name="peso"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
									</Grid>
									<Grid container justify="space-around">
										<Grid item md={4}>
											<Button onClick={props.handle}  variant="contained" fullWidth color="primary" >Cerrar</Button>
										</Grid>
										<Grid item md={4}>
											<Button type="submit" disabled={dis} variant="contained" fullWidth color="primary" >Guardar</Button>
										</Grid>
									</Grid>
								</Grid>
					</form>
		    	</div>
		    </Modal>
		</React.Fragment>
	)
}

export default EditarModal;