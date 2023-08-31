import React, {useContext} from 'react' ;
import { useState } from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext';
import { Link ,useNavigate} from 'react-router-dom';



function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    const {SignUp} = useContext(AuthContext) ;
    const history = useNavigate();

    let handleSubmit = async()=>{
        try{
            let userObj = await SignUp(email,pass);
            setUser(userObj.user); 
            console.log(userObj);
            history('/main');
        }catch(err){
            console.log(err);
        }
    }

    return (
            <>
                {
                    user === '' ? 
                    <>
                        <label htmlFor='email'/>
                        <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor='pass'/>
                        <input type='password' id='pass' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                        <button type='button' onClick={handleSubmit}>Sign Up</button>
                        <Link to='/login' style={{textDecoration : "none"}}>or Sign in</Link>
                    </>
                    :
                    <>

                    </>
                }
            </>
            )
}

export default SignupComp