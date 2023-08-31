import React, { useEffect, useState } from "react" ;
import { auth } from "../firebase/firebase";

export const AuthContext = React.createContext();

export function AuthProvider({children}){

    const [user,setUser] = useState('') ;
    const [load,setLoading] = useState(false) ;

    function Login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    
    function SignUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    
    function SignOut(){
        return auth.signOut();
    }

    useEffect(()=>{
        let Listner = auth.onAuthStateChanged((UserId)=>{
            setUser(UserId);
            setLoading(false);
        })
        return ()=>{
            Listner();
        }
    },[])
    
    let store = {
        Login,
        SignOut,
        SignUp,
        user
    }

    return (
        <AuthContext.Provider value={store}>
            {!load && children}
        </AuthContext.Provider>
    )

}

