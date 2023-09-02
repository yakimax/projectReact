import React,{useContext} from 'react'
import { AuthContext } from '../ContextAPI/AuthContext'

function Main() { 
    const {SignOut,user} = useContext(AuthContext) ;
  return (
    <div>
      {
        user !=='' ?
        <div>{user.uid}
          <button type='button' onClick={SignOut}>logout</button>
        </div>
        :
        <></>
      }
    </div>
  )
}


export default Main
