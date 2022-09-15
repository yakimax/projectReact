import { React , useState } from 'react' ;

function Login(){
  const [email,setEmail] = useState('') ;
  const [pass,setPass] = useState('') ;
let trackmail = (e)=>{
  setEmail(e.target.value)
}
let trackpass = (e)=>{
  setPass(e.target.value);
}
let displayDetails =()=>{
  alert(email +"    "+pass)
}
  return (
    <>
      <input type = "text" value = {email} placeholder = 'email' onChange={trackmail}></input>
      <br></br>
      <input type = "text" value = {pass} placeholder = 'password' onChange={trackpass}></input>
      <br></br>
      <button type = "click" onClick={displayDetails}>Log in</button>
    </>
  )
}

export default Login