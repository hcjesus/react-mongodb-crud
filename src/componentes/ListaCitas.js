import React,{ useEffect } from 'react';
import Cita from './Cita';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import {Grid,Card,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import {useSelector,useDispatch} from 'react-redux';
import {mostrarCitas} from '../actions/citasActions';

/*
store.subscribe(() => {
	localStorage.setItem('citas',JSON.stringify(store.getState()));
});
*/



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
  	marging: '4px 4px',
    display: 'flex',
  	width: '100%',
  	[theme.breakpoints.up('sm')]: {
      padding: '40px',
    },
},
header:{
  	textAlign: 'center',
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

const ListaCitas = (props) => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(mostrarCitas());
	},[]);

	const {citas} = useSelector(state => state.citas);

	const classes = useStyles();
	//const citas = this.props.citas;
	const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Citas Agendadas';
    return (
        <ThemeProvider theme={theme}>
			<Grid container className={classes.root}>
				<Grid item xs={12} md={12}>
					<Card className={classes.cards}>
						<CardContent>
							<Typography variant="h4" className={classes.header}>{mensaje}</Typography>
						</CardContent>
						{citas.map(cita => (
							<Cita
								key={cita._id}
								cita={cita}
							/>
						))}
						
					</Card>
					
				</Grid>	
			</Grid>
		</ThemeProvider>
    );
};
/*
const mapStateToProps = state =>({
	citas : state.citas.citas
});
*/
//export default connect(mapStateToProps,{mostrarCitas}) (ListaCitas);
export default ListaCitas;
