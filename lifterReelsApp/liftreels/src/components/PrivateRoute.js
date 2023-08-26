import React,{ useContext} from 'react' ;
import { Navigate, } from 'react-router-dom' ;
import { AuthContext } from '../contextAPIs/AuthContext';


function PrivateRoute ({children}){
    const {user} = useContext(AuthContext) ;
    return (!user?
        <Navigate to = '/Login'/>: children 
    )
}

export default PrivateRoute ;