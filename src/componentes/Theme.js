import { makeStyles,createMuiTheme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
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



