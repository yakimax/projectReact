import React,{useContext} from 'react'
import { AuthContext } from '../ContextAPI/AuthContext'
import { useNavigate } from 'react-router-dom';

function Main() {
    const handleLogout = async()=>{
        await SignOut ;
        navigateTo('/login') ;
    }
    const {SignOut,user} = useContext(AuthContext) ;
    const navigateTo = useNavigate() ;
  return (
    <div>
        <div>{user.uid}</div>
        <button type='button' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Main