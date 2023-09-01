import React,{ useContext } from 'react'
import { AuthContext } from '../ContextAPI/AuthContext';
import { Navigate } from 'react-router-dom';


function PrivateRouter({children}) {
    const {user} = useContext(AuthContext);
    return (
            !user ? <Navigate to='/login'/> : children
    )
}

export default PrivateRouter