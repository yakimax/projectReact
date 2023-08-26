import React,{useContext} from 'react' ;
import { Route } from 'react-router-dom' ;
import { Redirect } from 'react-router' ;
import { AuthContext } from '../contextAPIs/AuthContext';


function PrivateRoute({element:Elements ,...rest}) {
    const {user} = useContext(AuthContext) ;
  return (
    <Route {...rest} render={(props)=>{
        return user ?<Elements {...props}/> : <Redirect to='login'/>
    }}/>
  )
}

export default PrivateRoute