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
import bg from '../misc/phones.png' ;
import { CarouselProvider, Slider, Slide ,Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../misc/img1.PNG' ;
import img2 from '../misc/img2.PNG' ;
import img3 from '../misc/img3.PNG' ;



export default function Signup() {
    const useStyles = makeStyles({
        text1 : {
            color : 'grey' ,
            textAlign : 'center' 
        },
        card2 : {
            height : '9vh',
            marginBottom : '15vh' 
        }
    })
    const classes = useStyles() ;
    
    return (
    <>
    <div className ="signup-wrapper">
      <div className="mobilecaurosel" style={{backgroundImage : 'url('+bg+')' , backgroundSize : 'cover'}}>
        <div className ="carousel">
            <CarouselProvider touchEnabled={false} isPlaying={true} hasMasterSpinner infinite={true} dragEnabled={false} visibleSlides={1}  naturalSlideWidth={238} naturalSlideHeight={423} totalSlides={3}>
            <Slider>
              <Slide index={0}><Image src={img1}></Image></Slide>
              <Slide index={1}><Image src={img2}></Image></Slide>
              <Slide index={2}><Image src={img3}></Image></Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    <div class ="signup-card">
    <Card variant="outlined">
        
        <CardContent>
            <div class ="insta-logo">
                <img src={insta} alt='instagram'></img>
            </div>
          <Typography className={classes.text1} variant="subtitles1" >
            Signup and lift your mood while connected with your friends{'\u2728'}
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
          Sign up
        </Button>
      </CardActions>
      <CardContent>
        <Typography>
            By signing in you adheer to our terms and privacy policies*
        </Typography>
      </CardContent>
    </Card>
    <Card variant='outlined' className={classes.card2}>
        <CardContent>
            <Typography className={classes.text1} variant='outlined'>
                Having an account ?  <Link to="/login" style={{textDecoration : 'none'}}>Log in</Link>
            </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
    </>
  );
}