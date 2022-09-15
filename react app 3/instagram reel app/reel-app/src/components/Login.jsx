import { React , useState } from 'react' ;

function Login(){
  const {email,setEmail} = useState('') ;
  const {pass,setPass} = useState('') ;
let trackmail = (e)=>{
  setEmail(e.target.value)
}
let trackpass = (e)=>{
  setPass(e.target.value);
}
let displayDetails =()=>{
  alert(email +""+pass)
}
  return (
    <>
      <input type = "text" onChange={trackmail}></input>
      <input type = "text" onChange={trackpass}></input>
      <button type = "submit" onSubmit={displayDetails}>Log in</button>
    </>
  )
}

export default Login