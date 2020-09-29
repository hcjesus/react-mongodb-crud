import React, {useState} from 'react';
import {Grid,Divider,Card,CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {agregarMascota} from '../actions/mascotasActions';
import {useDispatch} from 'react-redux';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import { makeStyles,createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marging: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0 10px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '60px 0 0 0',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    color:'#000000',
    flex: 1,
  },
  fullinput:{  	
    background:'#b6c8d0',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  hdivider:{
    marginBottom: '10px',
  },
  cards:{
    width: 800,
  	marging: '10px',
  	padding: '3px',
  },
  header:{
  	textAlign: 'center',
    padding:'0 0 15px 0',
  },
  inputField:{
  	padding:'5px 0 15px 0',
  },
  inputText:{
  	padding:'5px 0 15px 0',
  	width: '25ch',
  },
  listaMascotas:{
    width: '100%',
    backgroundColor:'white',
  },
  tableHead:{
    backgroundColor:'#f5f5f5',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputback:{
    backgroundColor:'#f5f5f5',
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    width:'80%',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.up('sm')]: {
      width:'40%',
    },
  },
  buttonback:{
     background: 'linear-gradient(to bottom right, #ff4081 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  }
}));

const NuevaMascota = (props) => {
	const classes = useStyles();

	const [values, setValues] = useState({
		nombre:'',
		raza:'',
		edad:'',
		especie:'',
		sexo:'',
		propietario:'',
		peso:''
	});

	const handleChangeForm = event => {
    	setValues({ ...values, [event.target.name]: event.target.value });
  	};
	const dispatch = useDispatch();
	const addMascota = e =>{
		e.preventDefault();
		dispatch(agregarMascota(values));
		
		props.history.push('/listaMascotas');

	}

    return (
        <React.Fragment>
        	<Grid container justify='center'>
        		<Grid item xs={10} md={8} container justify='center' className={classes.root}>
        			<Card className={classes.cards}>
						<CardContent>
							
						</CardContent>
						<CardContent>
							<ValidatorForm onSubmit={addMascota} autoComplete="off">
								<Typography variant="h5" className={classes.header}>Datos de la mascota</Typography>
								<Divider className={classes.hdivider} variant="middle" />
								<Grid container justify="space-around">
									<Grid item xs={12} md={4}>										
										<TextValidator
											className={classes.inputField}
											fullWidth
											name="nombre"
										    label="Nombre"
										    variant="outlined"
										    onChange={handleChangeForm}
										    value={values.nombre}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Raza"
										    name="raza"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.raza}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Edad"
										    name="edad"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.edad}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Peso"
										    name="peso"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.peso}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
									</Grid>
									
									<Grid item xs={12} md={4}>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Especie"
										    name="especie"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.especie}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Sexo"
										    name="sexo"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.sexo}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										<TextValidator
										    className={classes.inputField}
										    fullWidth
										    label="Propietario"
										    name="propietario"
											onChange={handleChangeForm}	
										    variant="outlined"
										    value={values.propietario}
										    InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										/>
										
									</Grid>
								</Grid>
								<Divider className={classes.hdivider} />
								<Grid container justify="flex-end">
									<Grid item md={3}>
										<Button type="submit" variant="contained" fullWidth className={classes.buttonback} >Guardar</Button>
									</Grid>
								</Grid>
								        
								        
								    </ValidatorForm>
								</CardContent>
							</Card>
        		</Grid>
        	</Grid>
        </React.Fragment>
    );
};


export default NuevaMascota;
