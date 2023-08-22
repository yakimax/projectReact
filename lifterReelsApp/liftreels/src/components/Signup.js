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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom' ;

export default function Signup() {
    const useStyles = makeStyles({
        text1 : {
            color : 'grey' ,
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
          <Typography className={classes.text1} variant="subtitles1" >
            signup to lift your mood and connect with your friends  
          </Typography>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth="true" margin="dense" />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth="true" margin="dense" />
          <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth="true" margin="dense" />
        <Button fullWidth={true} color="secondary" margin="dense" variant='outlined' startIcon={<CloudUploadIcon  />} component="label">
          upload profile image
          <input type='file' accept='image/*' hidden/>
        </Button>

        </CardContent>
      <CardActions>
        <Button color="primary" variant='contained' margin='dense' fullWidth={true}>
          Share
        </Button>
      </CardActions>
      <CardContent>
        <Typography>
            By signing in you adheer to aur terms and privacy policies*
        </Typography>
      </CardContent>
    </Card>
    <Card variant='outlined' style={{marginBottom : '4%'} }>
        <CardContent>
            <Typography className='text1' variant='outlined'>
                Having an account ?  <Link to="/login">Log in</Link>
            </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
  );
}