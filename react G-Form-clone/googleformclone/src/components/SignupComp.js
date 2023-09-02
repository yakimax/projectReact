import React, {useContext} from 'react' ;
import { useState } from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext';
import { Link ,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Css/SignupComp.css';
import Paper from '@mui/material/Paper';
import image from '../misc/logo2.jpg';





function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    const [name,setName] = useState('') ;
    const [error,setError] = useState('') ;
    const {SignUp} = useContext(AuthContext) ;
    const [loading,setLoading] = useState(false);
    const history = useNavigate();

    let handleSubmit = async()=>{
        try{
            setLoading(true);
            let userObj = await SignUp(email,pass);
            setUser(userObj.user);
            setLoading(false);
            console.log(userObj);
            history('/');
        }catch(err){
            setError(err);
            setTimeout(()=>{
                console.log(error);
                setError('');
            },2000);
            setLoading(false);
        }
    }

    return (
            <>
                {
                    user === '' ?
                    <div className='outer'>
                        <Paper elevation={13} sx={{borderRadius:2,backgroundColor: 'white',width:'25vw',height:'66vh',position:'relative',display:'flex',flexDirection:'column',alignItems:'center' }}>
                        <div className='image-holder'>
                            <img src={image}  alt=''></img>
                        </div>
                        <div className='signupMain'>
                            <TextField id="email" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
                            <TextField id="pass" label="Password" variant="outlined"  onChange={(e)=>setPass(e.target.value)}/>
                            <TextField id="name" label="User Name" variant="outlined"  onChange={(e)=>setName(e.target.value)}/>
                            <Button color="primary" size='large' variant='contained' disabled={loading}  sx={{ width: 255,height:30}} onClick={handleSubmit}>SignUp</Button>
                            <p>Already have an account? <Link to='/login' style={{textDecoration : "none"}}> Sign in</Link></p>
                        </div>
                        </Paper>
                    </div>
                    :
                    <>

                    </>
                }
            </>
            )
}

export default SignupComp