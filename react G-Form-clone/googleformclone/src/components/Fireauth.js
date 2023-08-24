import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase';


function Fireauth() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;

    let createuser = async ()=>{
        let user = await auth.createUserWithEmailAndPassword(email,pass) ;
        console.log(user) ;
    }

    useEffect(()=>{
        auth.onAuthStateChanged((admin)=>
            setUser(admin) )
    },[])

    return (
    <>
    {
        user==null ?
            <div>
                <label htmlFor='email'>Enter Email</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor='password'> Enter Password</label>
                <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button onClick={createuser}>Sign Up</button>
            </div>
            :
            <div>{user.uid}</div>
    }
    </>
  )
}

export default Fireauth