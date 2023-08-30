import React, { useEffect, useState } from "react" ;
import { auth } from "../../../../lifterReelsApp/liftreels/src/firebase/firebase";

export const AuthContext = React.createContext();

export function AuthContext({children}){

    const [user,setUser] = useState('') ;
    const [load,setLoading] = useState(true) ;

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
        <AuthContext.Provider>
            {load && children}
        </AuthContext.Provider>
    )

}

