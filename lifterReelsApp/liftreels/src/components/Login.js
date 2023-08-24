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
import bg from '../misc/phones.png' ;
import { CarouselProvider, Slider, Slide ,Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../misc/img1.PNG' ;
import img2 from '../misc/img2.PNG' ;
import img3 from '../misc/img3.PNG' ;

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
                    Dont have an account ?  <Link to="/signin" style={{textDecoration : 'none'}} >Sign up</Link>
                </Typography>
            </CardContent>
        </Card>

    </div>
    </div>
    
  );
}