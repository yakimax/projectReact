import React, {useContext} from 'react' ;
import { useState } from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext';
import { Link ,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Css/SignupComp.css';



function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    // const [error,setError] = useState('') ;
    const {SignUp} = useContext(AuthContext) ;
    const history = useNavigate();

    let handleSubmit = async()=>{
        try{
            let userObj = await SignUp(email,pass);
            setUser(userObj.user);
            console.log(userObj);
            history('/');
        }catch(err){
            console.log(err);
        }
    }

    return (
            <>
                {
                    user === '' ?
                    <div className='signupMain'>
                        <TextField id="email" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="pass" label="Password" variant="outlined"  onChange={(e)=>setPass(e.target.value)}/>
                        <Button color="secondary" size='large' variant='contained'   sx={{ width: 210,height:30}} onClick={handleSubmit}>SignUp</Button>
                        <Link to='/login' style={{textDecoration : "none"}}>or Sign in</Link>
                    </div>
                    :
                    <>

                    </>
                }
            </>
            )
}

export default SignupComp