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
import {Link,useNavigate} from 'react-router-dom' ;
import bg from '../misc/phones.png' ;
import { CarouselProvider, Slider, Slide ,Image} from 'pure-react-carousel' ;
import 'pure-react-carousel/dist/react-carousel.es.css' ;
import img1 from '../misc/img1.PNG' ;
import img2 from '../misc/img2.PNG' ;
import img3 from '../misc/img3.PNG' ;
import { useContext,useState } from 'react' ;
import { AuthContext } from '../contextAPIs/AuthContext' ;
import { database, storage } from '../firebase/firebase';



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
    const [email,setEmail] = useState('') ;
    const [password,setPassword] = useState('') ;
    const [name,setName] = useState('') ;
    const [file,setFile] = useState(null) ;
    const [loading,setLoading] = useState(false) ;
    const [error,setError] = useState('') ;
    const history = useNavigate() ; 
    const {signup} = useContext(AuthContext) ;


    let handleSignUP = async()=>{
      if(file == null){
        setError("please upload your profile image first") ;
        setTimeout(()=>{
          setError('');
        },2000)
        return ;
      }
      try{
        setLoading(true) ;
        let userObj = await signup(email,password) ;
        let userid = userObj.user.uid ;
        let uploadFun = storage.ref(`/users/${userid}/profileImage`).put(file) ;
        uploadFun.on('state_changed',fn1,fn2,fn3) ;
        function fn1(snapshot){
          let progress = (snapshot.bytesTransfered /snapshot.totalBytes)*100 ;
          console.log(`photo ${progress}% uploaded`);
        }
        function fn2(err){
          setError(err) ;
          setTimeout(()=>{
            setError('') ;
          },2000)
          setLoading(false);
          return ;
        }
        function fn3(){
          uploadFun.snapshot.ref.getDownloadURL().then((url)=>{
            console.log(url) ;
            database.users.doc(userid).set({
              Email : email,
              userID : userid,
              fullName : name,
              profileUrl: url,
              createdAt:database.getTimeStamp()
            })
          })
          setLoading(false) ;
          history('/');
        }
      }catch(err){
        setError(err) ;
        setTimeout(()=>{
          setError('') ;
        },2000)
      }
    }
    
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
    <div className ="signup-card">
    <Card variant="outlined">
        
        <CardContent>
            <div className ="insta-logo">
                <img src={insta} alt='instagram'></img>
            </div>
          <Typography className={classes.text1} variant="subtitles1" >
            Signup and lift your mood while connected with your friends{'\u2728'}
          </Typography>
          {error !== '' && <Alert severity="error">{error}</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Button fullWidth={true} color="secondary" margin="dense" variant='outlined' startIcon={<CloudUploadIcon  />} component="label">
          upload profile image
          <input type='file' accept='image/*' hidden onChange={(e)=>setFile(e.target.files[0])}/>
        </Button>
        </CardContent>
      <CardActions>
        <Button color="primary" variant='contained' margin='dense' fullWidth={true} disabled = {loading} onClick={handleSignUP}>
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