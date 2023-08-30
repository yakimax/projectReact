import React, { useEffect ,useContext} from 'react' ;
import { useState } from 'react' ;
import { auth } from '../firebase/firebase' ;
import { AuthContext } from '../ContextAPI/AuthContext';


function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    const {Signup} = useContext(AuthContext) ;

    let handleSubmit = ()=>{
        let createUser = Signup(email,pass);
        return createUser() ;
    }

    return (
    
    <>
        {
            user == null ? 
            <>
                <label htmlFor='email'/>
                <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor='pass'/>
                <input type='password' id='pass' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type='submit' onClick={handleSubmit}>Sign Up</button>
            </>
            :
            <>
                {user.uid}
            </>
        }
    </>
  )
}

export default Fireauth