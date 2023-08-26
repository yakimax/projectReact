import React,{ useContext } from 'react'
import { AuthContext } from '../contextAPIs/AuthContext'
import { Button } from '@mui/material';



function Feed() {
  const {signout} = useContext(AuthContext) ;
  return (
  <>
      <div>Welcome to Feeds</div>
      <Button onClick={signout}>Sign Out</Button>
  </>
  )
}

export default Feed