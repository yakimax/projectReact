import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import insta from '../misc/img-png.png';
import './signup.css';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom' ;

export default function Login() {
    const useStyles = makeStyles({
        text1 : {
            color : 'grey' ,
            textAlign : 'center' 
        },
        text2 : {
          textAlign : 'center'
        },
        card2 : {
            height : '9vh',
            textAlign : 'center'
        }
    })
    const classes = useStyles() ;
    
    return (

    <div class ="signup-wrapper">
    <div class ="signup-card">
    <Card variant="outlined">
        
        <CardContent>
            <div class ="insta-logo">
                <img src={insta} alt='instagram'></img>
            </div>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth="true" margin="dense" />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth="true" margin="dense" />
          <Typography color='primary' className={classes.text2} >
            Forget Password ?
          </Typography>

        </CardContent>
      <CardActions>
        <Button color="primary" variant='contained' margin='dense' fullWidth={true}>
          Log in
        </Button>
      </CardActions>
    </Card>
    <Card variant='outlined' className={classes.card2}>
        <CardContent>
            <Typography className={classes.text1} variant='outlined' >
                Dont have an account ?  <Link to="/signin" style={{textDecoration : 'none'}} >Log in</Link>
            </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
  );
}