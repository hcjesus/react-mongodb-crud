import React, {Component,useEffect,useState,useRef,useReducer} from 'react';
import {TextField,Input,Grid,Paper,InputBase,Divider,IconButton,Card,CardActions,CardContent,
		FormControl,FormGroup,FormControlLabel,FormHelperText,Checkbox} from '@material-ui/core';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import luxonUtils from '@date-io/luxon';
import {MuiPickersUtilsProvider, KeyboardTimePicker,  KeyboardDatePicker,} from '@material-ui/pickers';

import {mostrarMascota} from '../actions/mascotasActions';
import {mostrarMascotas} from '../actions/mascotasActions';
import {useSelector,useDispatch} from 'react-redux';
import { useForm,Controller  } from "react-hook-form";
import { createSelector } from "reselect";

import EditForm from './EditForm';

import {useStyles} from './Theme';

const EditarMascota = (props) => {
   const classes = useStyles();

   	const {mascota} = useSelector(state => state.mascotas) || [];
   	

   const dispatch = useDispatch();
	useEffect(()=>{
		const {id} = props.match.params;
		dispatch(mostrarMascota(id));		
	},[]);

	console.log('mascota0',mascota);

	const {nombre,raza,edad,especie,sexo,propietario,peso,_id,vacunas:{rabia,moquillo,hepatitis,parvovirus} = {}} = mascota;
	//const[values,setValues] = useState(props.val || {})

	
	const [values, setValues] = useState({
		nombre,
		raza,
		edad,
		especie,
		sexo,
		propietario,
		peso,
		vacunas:{
			rabia,
			moquillo,
			hepatitis,
			parvovirus
		}
	});
 
	const handleChangeForm = event => {
		console.log('aqui ambien paso');
    	//setValues({ ...values, [event.target.name]: event.target.value });
  	};

  	 const handleChange = (event) => {
  	 	console.log('aqui paso');
	    //setValues({ ...values, vacunas: {...values.vacunas, [event.target.name]: event.target.checked} });
	  };

	const updateMascota = e =>{
		e.preventDefault();
		console.log(values);
		//dispatch(agregarMascota(values));
		e.currentTarget.reset();
	}

	console.log("nombrenombrenombre",nombre);

    return (
        <React.Fragment>
        	<Grid container justify='center'>
        		<Grid item xs={10} md={8} container justify='center' className={classes.root}>
        			<Card className={classes.cards}>
						<CardContent>
							
						</CardContent>
						<CardContent>
						<form onSubmit={updateMascota} autoComplete="off">
								<Grid container justify="space-around">
									<Grid item xs={12} md={4}>
										<Typography variant="h5" className={classes.header}>Datos de la mascota</Typography>
										{console.log('nombre dentro:',nombre)}
										<input type="text" value={ nombre || ''} onChange={handleChangeForm} name="nombre"/>
										<TextField										
											defaultValue={ nombre || ''}
											className={classes.inputField}
											fullWidth
											name="nombre"
										    label="Nombre"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											value={raza}
										    className={classes.inputField}
										    fullWidth
										    label="Raza"
										    name="raza"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											value={edad}
										    className={classes.inputField}
										    fullWidth
										    label="Edad"
										    name="edad"
										    onChange={handleChangeForm}
										    variant="outlined"
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											value={especie}
										    className={classes.inputField}
										    fullWidth
										    label="Especie"
										    name="especie"	
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
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
									<Divider orientation="vertical" flexItem />
									<Grid item xs={12} md={4}>
										<Typography variant="h5" className={classes.header}>Esquema de Vacunacion</Typography>
										<FormControl component="fieldset" className={classes.formControl}>
									        <FormGroup>
									          <FormControlLabel
									            control={<Checkbox checked={rabia || false} onChange={handleChange} name="rabia" />}
									            label="Rabia"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={moquillo || false} onChange={handleChange}name="moquillo" />}
									            label="Moquillo"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={hepatitis || false} onChange={handleChange} name="hepatitis" />}
									            label="Hepatitis"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={parvovirus || false} onChange={handleChange} name="parvovirus" />}
									            label="Parvovirus"
									          />
									        </FormGroup>
									        <FormHelperText>Be careful</FormHelperText>
									      </FormControl>
									</Grid>
								</Grid>
								
								        
								        <Button type="submit" variant="contained" fullWidth color="primary" >Agendar</Button>
								    </form>
						</CardContent>
					</Card>
        		</Grid>
        	</Grid>
        </React.Fragment>
    );
};

export default EditarMascota;
