import React,{useState} from 'react';
import {FormControl,FormGroup,FormControlLabel,FormHelperText,
		Checkbox} from '@material-ui/core';

import {useStyles} from './Theme';

const VacunacionCheck = (props) => {
	const classes = useStyles();

	const { rabia, moquillo, hepatitis, parvovirus } = props.info.vacunas;

	console.log("props.info.vacunas",props.info.vacunas);

	const [values, setValues] = useState({
		nombre:'',
		raza:'',
		edad:'',
		especie:'',
		sexo:'',
		propietario:'',
		peso:'',
		_id:'',
		vacunas:{
			rabia,
			moquillo,
			hepatitis,
			parvovirus
		}
	});



	const handleChangeCheck = (e) =>{
		console.log(e.target.name,e.target.checked);
		setValues({ ...values, vacunas: {...values.vacunas, [e.target.name]: e.target.checked} });
	}
	
	return (
		<React.Fragment>
			<FormControl component="fieldset" className={classes.formControl}>
			    <FormGroup>
			      <FormControlLabel
			        control={<Checkbox checked={values.rabia || false} onChange={handleChangeCheck} name="rabia" />}
			        label="Rabia"
			      />
			      <FormControlLabel
			        control={<Checkbox  checked={values.moquillo || false} onChange={handleChangeCheck}name="moquillo" />}
			        label="Moquillo"
			      />
			      <FormControlLabel
			        control={<Checkbox  checked={values.hepatitis || false} onChange={handleChangeCheck} name="hepatitis" />}
			        label="Hepatitis"
			      />
			      <FormControlLabel
			        control={<Checkbox  checked={values.parvovirus || false} onChange={handleChangeCheck} name="parvovirus" />}
			        label="Parvovirus"
			      />
			    </FormGroup>
			    <FormHelperText>Be careful</FormHelperText>
			</FormControl>
		</React.Fragment>
	)
}

export default VacunacionCheck;