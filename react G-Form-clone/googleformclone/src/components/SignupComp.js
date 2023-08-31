import React, {useContext} from 'react' ;
import { useState } from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext';



function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    const {SignUp} = useContext(AuthContext) ;

    let handleSubmit = ()=>{
        let userObj = SignUp(email,pass);
        setUser(userObj.user); 
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
                    </>
                    :
                    <>
                        {user.uid}
                    </>
                }
            </>
            )
}

export default SignupComp