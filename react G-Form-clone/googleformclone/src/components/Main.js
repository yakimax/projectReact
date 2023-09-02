import React,{useContext} from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext' ;
import Title from './Title' ;
import '../Css/Main.css' ;


function Main() {
    const {SignOut,user} = useContext(AuthContext) ;
  return (
    <div>
      {
        user !=='' ?
        <div className='outer'>
          <div className='inner'>
            <Title/>
            <h3>{user.uid}</h3>
            <button type='button' onClick={SignOut}>logout</button>
          </div>
        </div>
        :
        <></>
      }
    </div>
  )
}

export default Main
