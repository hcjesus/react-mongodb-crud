import React from 'react';
import {Grid,Divider} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const img = require('../assets/img/img1.jpg');

const useStyles = makeStyles((theme) => ({
  root: {
  	width: '100vw',
    height: '90vh',
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  root2:{
  	color:'white',
  	paddingTop:'40px',
  },
  header:{
  	padding:'5px',  	
  	textAlign: 'center',
  },
  text:{
  	padding:'5px',  	
  	textAlign: 'justify',
  },
  divider:{
  	background:'#ffffff',
  },
  image:{
  	width: '100vw',
    height: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Wellcome = (props) => {
	const classes = useStyles();
	

    return (
        <React.Fragment>
        <CssBaseline/>
        	<Grid container >
			    <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0}} className={classes.root} >
			    	<Grid container justify='space-around'>
			    		
			    		<Grid item xs={10} md={3} className={classes.root2} >
				    		<Typography variant="h4" className={classes.header} >
				    			Mascotas Felices
				    		</Typography>
				    		<Divider className={classes.divider}/>
				    		<Typography variant="body1" className={classes.text}>
				    			Elit reprehenderit eiusmod mollit tempor ut consequat pariatur voluptate 
				    			dolore cupidatat exercitation in fugiat ullamco mollit exercitation excepteur 
				    			pariatur elit id nisi exercitation dolor. Lorem ipsum sunt exercitation anim in 
				    			qui culpa quis id incididunt in officia do excepteur in commodo eu do ex 
				    			excepteur exercitation.
				    		</Typography>
			    		</Grid>
			    		<Grid item xs={12} md={4}>
			    		</Grid>
			    	</Grid>
			    </Grid>

			  </Grid>
        </React.Fragment>
    );
};


export default Wellcome;
