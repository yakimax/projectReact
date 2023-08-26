import React,{ useContext, useEffect,useState } from 'react'
import { AuthContext } from '../contextAPIs/AuthContext'
import UploadFile from './UploadFile';
import { database } from '../firebase/firebase';
import Posts from './Posts';

function Feed() {
  const {user,signout} = useContext(AuthContext) ;
  const [userData,setUserData] = useState('') ;
  useEffect(()=>{
    const unsub = database.users.doc(user.uid).onSnapshot((snaphot)=>{
      setUserData(snaphot.data()) ;
    })
    return ()=>{
      unsub();
    }
  },[user])

  return (
  <>
    <div style={{display : 'flex',justifyContent : 'center',alignItems: 'center' ,flexDirection:'column' }}>
      <div className='comp' style={{width : '50%'}}>
        <div>Welcome to Feeds</div>
        <button onClick={signout}>Sign Out</button>
      </div>
      <UploadFile user={userData}/>
      <Posts user={userData}/>
    </div>
  </>
  )
}


export default Feed