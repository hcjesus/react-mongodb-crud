import React from 'react';
import NuevaCita from './NuevaCita';
import ListaCitas from './ListaCitas';


import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      padding: '25px 100px 0 100px',
    },
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const themeDark = createMuiTheme({
  palette:{
    background: {
      default: '#2f3e46'
    },
  }
});

const Principal = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline/>
      <Grid container justify = 'space-between' className={classes.root}>
        <Grid item xs={12} md={6}>
          <NuevaCita/>
        </Grid>                  
        <Grid item xs={12} md={6}>
          <ListaCitas/>
        </Grid>           
      </Grid>       
    </ThemeProvider>
  );
}

export default Principal;
