import { React , useState } from 'react' ;
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'

function Login(){
  const [email,setEmail] = useState('') ;
  const [pass,setPass] = useState('') ;
  const [err,setError] = useState('') ;

  const [loader,setLoader] = useState(false) ;
  const [user,setUser] = useState(null) ;

  let trackmail = (e)=>{
  setEmail(e.target.value) ;
}
let trackpass = (e)=>{
  setPass(e.target.value) ;
}
let displayDetails = async ()=>{
  try{
    setLoader(true);
    let usersignin = await signInWithEmailAndPassword(auth,email,pass) ;
    setUser(usersignin.user);
  }catch(err){
    setError(err.message) ;
    setTimeout(()=>{
      setError("") ;
  },2000)
  }
  setLoader(false) ;  
}

  return (
    <>
    {
      err !== "" ? <h1>Error is{err}</h1> 
      : loader === true ? <h1>...Loading</h1> 
      : user != null ? <h1>User is @{user.uid}</h1> 
      : <>
        <input type = "text" value = {email} placeholder = 'email' onChange={trackmail}></input>
        <br></br>
        <input type = "text" value = {pass} placeholder = 'password' onChange={trackpass}></input>
        <br></br>
        <button type = "click" onClick={displayDetails}>Log in</button>
      </>
    }
    
    </>
  )
}

export default Login