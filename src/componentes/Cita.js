import React,{useState} from 'react';
import {Divider,CardContent} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {eliminarCita} from '../actions/citasActions';

import {useDispatch} from 'react-redux';

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
  lists:{
  	fontWeight:'bold',
  	margin: '5px',
    
},
normal:{
	fontWeight:'normal',
},
listacita:{
  backgroundColor:'#f5f5f5',
  borderRadius: '5px',
},
button:{
	padding:'5px 0 10px 0',
  background: 'linear-gradient(to bottom right, #ff4081 30%, #FF8E53 90%)',
  color:'white',
},
header:{
  	textAlign: 'center',
  },
}));

const capitalize = str =>{
  if(str){
    return str.charAt(0).toUpperCase() + str.slice(1);  
  }	
};

const Alert = (props,story) => {
  if(story.isLoading){
    return null;
  }
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Cita = (props) => {
	const classes = useStyles();

	const dispatch = useDispatch();

	//const {_id} = useSelector(state => state.cita[props._id]); 

	const deleteCita = () =>{
		const {_id} = props.cita;
		dispatch(eliminarCita(_id));
    handleClickSnak2();
	};

  const [openSnak2, setOpenSnak2] = useState(false);

    const handleClickSnak2 = () => {
      setOpenSnak2(true);
    };

    const handleCloseSnak2 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpenSnak2(false);
    };


	const {fecha,hora,mascota,propietario,sintomas} = props.cita;
    return (
        <React.Fragment>
        <Snackbar open={openSnak2} autoHideDuration={4000} onClose={handleCloseSnak2}>
            <Alert onClose={handleCloseSnak2} severity="error">
              Cita Eliminada!
            </Alert>
          </Snackbar>
			<CardContent className={classes.listacita}>
				<Typography variant="h6" className={classes.lists}>{capitalize(mascota)}</Typography>
				<Typography variant="body2" className={classes.lists} >Dueño:  <span className={classes.normal}>{propietario}</span></Typography>
				<Typography variant="body2" className={classes.lists}>Fecha: <span className={classes.normal}>{fecha}</span></Typography>
				<Typography variant="body2" className={classes.lists}>Hora: <span className={classes.normal}>{hora}</span></Typography>
				<Typography variant="body2" className={classes.lists}>Sintomas: <span className={classes.normal}>{sintomas}</span></Typography>
				
													
			</CardContent>
      <CardContent>
        <Button variant="contained" className={classes.button} fullWidth onClick={deleteCita} >Eliminar</Button>
      </CardContent>
      <CardContent>
        <Divider/>
      </CardContent>  
		</React.Fragment>
    );
};



export default Cita;
