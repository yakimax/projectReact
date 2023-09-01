import React,{useContext,useState} from 'react' ;
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const {Login} = useContext(AuthContext) ;
    const history = useNavigate();

    let handleSubmit = async()=>{
        try{
            await Login(email,pass);
            history('/');
        }catch(err){
            console.log(err);
        }
    }
  
  return (
    <>
        <label htmlFor='email'/>
        <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='pass'/>
        <input type='password' id='pass' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button type='button' onClick={handleSubmit}>login</button>
        <Link to='/signup' style={{textDecoration : "none"}}> or Sign up</Link>
    </>
  )
}

export default Signin