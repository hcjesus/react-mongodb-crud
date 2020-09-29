import React, {useState} from 'react';
import {Grid,Card,CardContent} from '@material-ui/core';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import luxonUtils from '@date-io/luxon';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import {agregarCita} from '../actions/citasActions';
import {useDispatch} from 'react-redux';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    marging: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0 10px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '40px',
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
  cards:{
  	marging: '10px',
  	padding: '30px',
  },
  header:{
  	textAlign: 'center',
  },
  inputField:{
  	padding:'5px 0 15px 0',
  	
  },
  inputText:{
  	padding:'5px 0 15px 0',
  	width: '25ch',
  },
  buttonback:{
  	background: 'linear-gradient(to bottom right, #ff4081 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  inputback:{
  	backgroundColor:'#f5f5f5',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const theme = createMuiTheme({
	palette: {
    primary:{
    	light:'#ff669a',
    	main:'#ff4081',
    	dark:'#b22c5a'
    }
  },
});


const Alert = (props,story) => {
	if(story.isLoading){
		return null;
	}
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NuevaCita = (props) => {

	const [values,setValues] = useState({
		mascota:'',
		propietario:'',
		fecha:'',
		hora:'',
		sintomas:''

	});


	const handleChangeForm = event => {
    	setValues({ ...values, [event.target.name]: event.target.value });
  	};
  	const [open, setOpen] = useState(false);

  	const [openSnak, setOpenSnak] = useState(false);

	  const handleClickSnak = () => {
	    setOpenSnak(true);
	  };

	  const handleToggle = () => {
	    setOpen(!open);
	  };

	   const handleClose = () => {
	    setOpen(false);
	  };
	  const handleCloseSnak = (event, reason) => {
	    if (reason === 'clickaway') {
	      return;
	    }

	    setOpenSnak(false);
	  };

	const dispatch = useDispatch();
	const addCita = e =>{
		handleToggle();
		e.preventDefault();
		dispatch(agregarCita(values));

		setValues({
			mascota:'',
			propietario:'',
			fecha:'',
			hora:'',
			sintomas:''
		});

		setTimeout(() =>{
			handleClose();
			handleClickSnak();
		},2000);
	}

	 	const classes = useStyles();
		return (
			<ThemeProvider theme={theme}>
			 <MuiPickersUtilsProvider utils={luxonUtils}>
			 <Backdrop className={classes.backdrop} open={open}>
		        <CircularProgress  />
		      </Backdrop>
		      <Snackbar open={openSnak} autoHideDuration={4000} onClose={handleCloseSnak}>
		        <Alert onClose={handleCloseSnak} severity="success">
		          Cita Agendada!
		        </Alert>
		      </Snackbar>
					<Grid container className={classes.root}>
						<Grid item md={12}>
							<Card className={classes.cards}>
								<CardContent>
									<Typography variant="h4" className={classes.header}>Agregar Citas</Typography>
								</CardContent>
								<CardContent>
									<ValidatorForm  onSubmit={addCita} autoComplete="off">
										<TextValidator

											className={classes.inputField}
											fullWidth
											name="mascota"
											onChange={handleChangeForm}	
								          	label="Nombre"
								         	variant="outlined"
								         	value={values.mascota}
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
								        <Grid container justify="space-between">
								        	<Grid item md={5}>
								        		<TextValidator
								        			variant="outlined"
										          margin="normal"
										          id="date"
										          type="date"
										          label="Fecha"
										          name="fecha"
													onChange={handleChangeForm}	
										          format="MM-dd-yyyy"
										          value={values.fecha}
										          InputLabelProps={{ shrink: true }}
										          InputProps={{
										         		className:classes.inputback,
										         	}}
										         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
										        />								        
								        	</Grid>
								        	<Grid item md={5}>
								        		<TextValidator
										          margin="normal"
										          id="time"
										          type="time"
										          name="hora"
										          label="Hora"
													onChange={handleChangeForm}	
										          variant="outlined"
										          value={values.hora}
										          InputLabelProps={{ shrink: true }}
										          InputProps={{
										         		className:classes.inputback,
										         	}}
										         	validators={['required']}
								         			errorMessages={['Campo obligatorio']}
										        />
								        	</Grid>								        	
								        </Grid>
								        <TextValidator
									        	className={classes.inputField}
									        	fullWidth
									        	multiline
									        	rows={4}
          										rowsMax={4}
									          label="Sintomas"
									          name="sintomas"
											onChange={handleChangeForm}	
									          variant="outlined"
									          value={values.sintomas}
									          InputProps={{
								         		className:classes.inputback,
								         	}}
								         	validators={['required']}
								         	errorMessages={['Campo obligatorio']}
									        />
								        <Button className={classes.buttonback} type="submit" variant="contained" fullWidth color="primary" >Agendar</Button>
								    </ValidatorForm>
								</CardContent>
							</Card>
						</Grid>	
					</Grid>
			 </MuiPickersUtilsProvider>	
			</ThemeProvider>
		)
	
}

export default NuevaCita;