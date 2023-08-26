import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebase';
import { CircularProgress } from '@mui/material';
import Videos from './Videos';
import './Posts.css'
import Avatar from '@mui/material/Avatar';



function Posts(props) {
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
    console.log(posts,props.user) ;
  return (
    <div>
        {posts == null || props.user == null ? <CircularProgress color="secondary" /> : 
            <div className='video-container'>
                    {
                        posts.map((post,id)=>(
                            <React.Fragment key={id}>
                                <div className='videos'>
                                    <Videos src={post.pUrl}/>
                                    <div className='pp'>
                                        <Avatar  src={props.user.profileUrl} />
                                        <h4>{props.user.fullName}</h4>
                                    </div>
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