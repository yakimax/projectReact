import React,{useContext} from 'react' ;
import { Route } from 'react-router' ;
import { Navigate } from 'react-router-dom' ;
import { AuthContext } from '../contextAPIs/AuthContext';


function PrivateRoute({element:Elements ,...rest}) {
    const {user} = useContext(AuthContext) ;
  return (
    <Route {...rest} render={(props)=>{
        return user ? <Elements {...props}/> : <Navigate to='login'/> 
    }}/>
  )
}

export default PrivateRoute