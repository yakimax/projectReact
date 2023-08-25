import {useState,useEffect,useContext} from 'react' ;
export const AuthContext = React.createContext() ;
import auth from '../firebase/auth' ;


function AuthProvider(){
    const [user,setUser] = useContext('') ;
    const [loading,setLoading] = useContext(true) ;

    function login(){
        
    }

    function signout(){
        return auth.signout() ;
    }

    function signup(){
        // return auth.
    }
}


