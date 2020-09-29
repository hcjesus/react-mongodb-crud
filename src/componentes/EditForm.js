import React, {  useState } from 'react';
import {TextField,Grid,Divider,
		FormControl,FormGroup,FormControlLabel,FormHelperText,Checkbox} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';		

import {useStyles} from './Theme';

import Button from '@material-ui/core/Button';

const EditForm = (props ) => {
	const classes = useStyles();
	//console.log('preloadedValues',preloadedValues);

	const updateMascota = e =>{
		e.preventDefault();
		//console.log(values);
		//dispatch(agregarMascota(values));
		e.currentTarget.reset();
	}

	const {nombre,raza,edad,especie,sexo,propietario,peso,_id,vacunas:{rabia,moquillo,hepatitis,parvovirus} = {}} = props.val;
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

	//const {nombre,raza,edad,especie,sexo,propietario,peso,_id,vacunas:{rabia,moquillo,hepatitis,parvovirus} = {}} = props.val;		
	console.log('nombre fuera:',props.val.nombre);

    return (
        <form onSubmit={updateMascota} autoComplete="off">
								<Grid container justify="space-around">
									<Grid item xs={12} md={4}>
										<Typography variant="h5" className={classes.header}>Datos de la mascota</Typography>
										{console.log('nombre dentro:',nombre)}
										<input type="text" value={ values.nombre || ''} onChange={handleChangeForm} name="nombre"/>
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
											value={props.val.raza}
										    className={classes.inputField}
										    fullWidth
										    label="Raza"
										    name="raza"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											value={props.val.edad}
										    className={classes.inputField}
										    fullWidth
										    label="Edad"
										    name="edad"
										    onChange={handleChangeForm}
										    variant="outlined"
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											value={props.val.especie}
										    className={classes.inputField}
										    fullWidth
										    label="Especie"
										    name="especie"	
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={props.val.sexo}
										    className={classes.inputField}
										    fullWidth
										    label="Sexo"
										    name="sexo"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={props.val.propietario}
										    className={classes.inputField}
										    fullWidth
										    label="Propietario"
										    name="propietario"
										    variant="outlined"
										    onChange={handleChangeForm}
										    InputLabelProps={{ shrink: true }}
										/>
										<TextField
											defaultValue={props.val.peso}
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
									            control={<Checkbox checked={props.val.rabia || false} onChange={handleChange} name="rabia" />}
									            label="Rabia"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={props.val.moquillo || false} onChange={handleChange}name="moquillo" />}
									            label="Moquillo"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={props.val.hepatitis || false} onChange={handleChange} name="hepatitis" />}
									            label="Hepatitis"
									          />
									          <FormControlLabel
									            control={<Checkbox  checked={props.val.parvovirus || false} onChange={handleChange} name="parvovirus" />}
									            label="Parvovirus"
									          />
									        </FormGroup>
									        <FormHelperText>Be careful</FormHelperText>
									      </FormControl>
									</Grid>
								</Grid>
								
								        
								        <Button type="submit" variant="contained" fullWidth color="primary" >Agendar</Button>
								    </form>
    );
};


export default EditForm;
