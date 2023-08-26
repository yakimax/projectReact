import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebase';
import { CircularProgress } from '@mui/material';
import Videos from './Videos';
import './Posts.css'


function Posts({userData}) {
    const[posts,setPost] = useState(null) ;
    useEffect(()=>{
        let parr = [] 
        const unsub = database.posts.orderBy('createdAt','desc').onSnapshot((querrySnapshot)=>{
            parr = [] ;
            querrySnapshot.forEach((doc)=>{
                let data = {...doc.data(),postId : doc.id}
                parr.push(data)
            })
            setPost(parr) ;
        })
        return unsub ;
    },[])
  return (
    <div>
        {posts == null || userData == null ? <CircularProgress color="secondary" /> : 
            <div className='video-container'>
                    {
                        posts.map((post,id)=>(
                            <React.Fragment key={id}>
                                <div className='videos'>
                                    <Videos src={post.pUrl}/>
                                </div>
                            </React.Fragment>
                        ))
                    }
            </div> 
        }
    </div>
  )
}

export default Posts