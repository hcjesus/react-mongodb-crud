import React from 'react';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 999999,
  },
  links:{
    textDecoration:'none',
    color:'#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backnav:{
    background: 'linear-gradient(to bottom right, #ff4081 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));



const Header = (props) => {
	const classes = useStyles();
    return (   
	        <div className={classes.root}>
		      <AppBar position="static" color="primary">
		        <Toolbar className={classes.backnav}>		          
		          <Typography variant="h6" className={classes.title}>
                <Link className={classes.links} to={'/'}>Home</Link>
		          </Typography>
              <Button color="inherit">
                <Link className={classes.links} to={'/principal'}>Citas</Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.links} to={'/listaMascotas'}>Mascotas</Link>
              </Button>              
		          <Button color="inherit">
                <Link className={classes.links} to={'/nuevaMascota'}>Agregar</Link>
              </Button>
		        </Toolbar>
		      </AppBar>
		    </div>
    );
};

export default Header;
