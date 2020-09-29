import React, {useEffect} from 'react';
import {TextField,Grid,Divider,Card,CardContent,
		FormControl,Select,InputLabel} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useSelector,useDispatch} from 'react-redux';
import SelectComponent from './SelectComponent';
import {mostrarMascotas} from '../actions/mascotasActions';
import {mostrarMascota} from '../actions/mascotasActions';

import {useStyles} from './Theme';

const Vacunacion = (props) => {
	const classes = useStyles();

	const dispatch = useDispatch();	
	useEffect(()=>{
		dispatch(mostrarMascotas());
	},[]);

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
	    setAge(event.target.value);	    
	    dispatch(mostrarMascota(event.target.value));
	};

	/*
	

	
	

	const [values, setValues] = useState({
		nombre:'',
		raza:'',
		edad:'',
		especie:'',
		sexo:'',
		propietario:'',
		peso:'',
		vacunas:{
			rabia:false,
			moquillo:false,
			hepatitis:false,
			parvovirus:false
		}
	});
	
	
	*/
	const {mascotas} = useSelector(state => state.mascotas);

	const {mascota} = useSelector(state => state.mascotas) || [];

	return (
		<React.Fragment>
        	<Grid container justify='center'>
        		<Grid item xs={10} md={8} container justify='center' className={classes.root}>
        			<Card className={classes.cards}>
						<CardContent>
							<Grid container justify="flex-start">
								<Grid item md={3}>
									<FormControl variant="outlined" fullWidth className={classes.formControl}>
									    <InputLabel htmlFor="age-native-simple">Mascota</InputLabel>
									    <Select
									      native
									      value={age}
									      onChange={handleChange}
									      label="Mascota"
									      inputProps={{
									        name: 'age',
									        id: 'age-native-simple',
									      }}
									    >
									    <option aria-label="None" value=""/>
									    	{mascotas.map(mascota => (
									    		<SelectComponent
									    			key={mascota._id}
									    			mascota={mascota}
									    		/>
									    	))}
									    </Select>
									</FormControl>
									<Divider/>
								</Grid>
								
							</Grid>
							<Grid container>
								<Grid item md={4} container justify="flex-start">
									{mascota.nombre ?
									<Typography variant="h6" className={classes.header}>Nombre: {mascota.nombre}</Typography>
									: 
									<Typography variant="h6" className={classes.header}>Nombre:</Typography>
									}
								</Grid>
								<Grid item md={4} container justify="flex-start">
									{mascota.nombre ?
									<Typography variant="h6" className={classes.header}>Raza: {mascota.raza}</Typography>
									: 
									<Typography variant="h6" className={classes.header}>Raza:</Typography>
									}
								</Grid>
								<Grid item md={4} container justify="flex-start">
									{mascota.nombre ?
									<Typography variant="h6" className={classes.header}>Dueño: {mascota.propietario}</Typography>
									: 
									<Typography variant="h6" className={classes.header}>Dueño:</Typography>
									}
								</Grid>
								<Divider/>
							</Grid>
						</CardContent>
						<CardContent>
						<form autoComplete="off">
							<Typography variant="h6" className={classes.header}>Esquema de Vacunacion</Typography>
								<Grid container>
									<Grid item md={2}>
										<Typography variant="subtitle1" className={classes.header}>Rabia:</Typography>
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Aplicacion"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Siguiente"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>					
									
								</Grid>								
								<Grid container>
									<Grid item md={2}>
										<Typography variant="subtitle1" className={classes.header}>Moquillo:</Typography>
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Aplicacion"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Siguiente"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>					
									
								</Grid>
								<Grid container>
									<Grid item md={2}>
										<Typography variant="subtitle1" className={classes.header}>Hepatitis:</Typography>
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Aplicacion"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Siguiente"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>					
									
								</Grid><Grid container>
									<Grid item md={2}>
										<Typography variant="subtitle1" className={classes.header}>Parvovirus:</Typography>
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Aplicacion"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>
									<Grid item xs={12} md={5}>										
										<TextField
								       	variant="outlined"
										       margin="normal"
										       id="date"
										       type="date"
										       label="Siguiente"
										       name="fecha"
										       format="MM-dd-yyyy"
										       InputLabelProps={{ shrink: true }}
										     />										
									</Grid>					
									
								</Grid>
								        
								        <Button type="submit" variant="contained" fullWidth color="primary" >Guardar</Button>
								    </form>
						</CardContent>
					</Card>
        		</Grid>
        	</Grid>
        </React.Fragment>
	);
}

export default Vacunacion;