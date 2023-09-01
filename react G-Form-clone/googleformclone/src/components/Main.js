import React,{useContext} from 'react'
import { AuthContext } from '../ContextAPI/AuthContext'

function Main() { 
    const {SignOut,user} = useContext(AuthContext) ;
  return (
    <div>
        <div>{user.uid}</div>
        <button type='button' onClick={SignOut}>logout</button>
    </div>
  )
}


export default Main
