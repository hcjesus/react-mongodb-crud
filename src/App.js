import React from 'react';
import ListaMascotas from './componentes/ListaMascotas';
import Header from './componentes/Header';
import Principal from './componentes/Principal';
import NuevaMascota from './componentes/NuevaMascota';
import EditarMascota from './componentes/EditarMascota';
import Vacunacion from './componentes/Vacunacion';
import Wellcome from './componentes/Wellcome';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {Provider} from 'react-redux';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import store from './store';

const themeDark = createMuiTheme({
  palette:{
    background: {
      default: '#2f3e46'
    },
    primary:{
      light:'#ff669a',
      main:'#ff4081',
      dark:'#b22c5a'
    },
  },
   typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: '300'
  }
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={themeDark}>
        <CssBaseline/>
          <Header/>
          <Switch>
            <Route exact path="/" component={Wellcome}/>
            <Route exact path="/principal" component={Principal}/>
            <Route exact path="/nuevaMascota" component={NuevaMascota}/>
            <Route exact path="/listaMascotas" component={ListaMascotas}/>
            <Route exact path="/editarMascota/:id" component={EditarMascota}/>
            <Route exact path="/esquemaVacunacion" component={Vacunacion}/>           
          </Switch>          
        </ThemeProvider>
      </Router>  
    </Provider>
  );
}

export default App;
