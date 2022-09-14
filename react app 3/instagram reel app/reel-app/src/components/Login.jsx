import { React , useState } from 'react' ;

function Login(){
  const {email,setEmail} = useState('') ;
  const {pass,setPass} = useState('') ;
  return (
    <>
      <input type = "text" onChange={setEmail}></input>
      <input type = "text" onChange={}></input>
      <button type = "submit">Log in</button>
    </>
  )
}

export default Login