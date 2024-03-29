import React,{useContext,useState} from 'react' ;
import { Link } from 'react-router-dom' ;
import { AuthContext } from '../ContextAPI/AuthContext' ;
import { useNavigate } from 'react-router-dom' ;
import Button from '@mui/material/Button' ;
import TextField from '@mui/material/TextField' ;
import '../Css/SignupComp.css' ;
import Paper from '@mui/material/Paper';
import image from '../misc/logo2.jpg';





function Signin() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const {Login} = useContext(AuthContext) ;
    const navigate = useNavigate() ;
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('') ;


    let handleSubmit = async()=>{
        try{
            setLoading(true) ;
            let userObj = await Login(email,pass) ;
            console.log(userObj) ;
            setLoading(false);
            navigate('/') ;
        }catch(err){
          setError(err);
          setTimeout(()=>{
              console.log(err);
              setError('');
          },2000);
          setLoading(false);
        }
    }
  
  return (
    <>
    <div className='outer'>
        <Paper elevation={13} sx={{borderRadius:2,backgroundColor: 'white',width:'25vw',height:'55vh',position:'relative',display:'flex',flexDirection:'column',alignItems:'center' }}>
          <div className='image-holder'>
            <img src={image}  alt=''></img>
          </div>
          <div className='signupMain'>
            <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField id="pass" label="Password" variant="outlined"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <Button color="primary" size='large' variant='contained' disabled={loading}  sx={{ width: 255,height:30}} onClick={handleSubmit}>login</Button>
            <p>Dont have an account? <Link to='/signup'  style={{textDecoration : "none"}}> Sign up</Link></p>
          </div>
        </Paper>
    </div>
    </>
  )
}

export default Signin