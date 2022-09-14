import { React , useState } from 'react' ;

function Login(){
  const {email,setEmail} = useState('') ;
  const {pass,setPass} = useState('') ;
  return (
    <>
      <input type = "text" onChange={trackmail}></input>
      <input type = "text" onChange={trackpass}></input>
      <button type = "submit">Log in</button>
    </>
  )
}

export default Login