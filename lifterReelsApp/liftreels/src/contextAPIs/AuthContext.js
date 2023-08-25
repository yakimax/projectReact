import React,{useState,useEffect} from 'react' ;
import {auth} from '../firebase/firebase' ;

export const AuthContext = React.createContext() ;



export function AuthProvider({children}){
    const [user,setUser] = useState('') ;
    const [loading,setLoading] = useState(true) ;

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password) ;
    }

    function signout(){
        return auth.signOut() ;
    }

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password) ;
    }


    useEffect(()=>{
        let subs = auth.onAuthStateChanged((userid)=>{
            setUser(userid) ;
            setLoading(false) ;
        })
        return ()=>{
            subs() ; 
        }
    },[])


    const store = {
        user,
        signout,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
