import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebase';
import { CircularProgress } from '@mui/material';
import Videos from './Videos';
import './Posts.css'
import Avatar from '@mui/material/Avatar';
import Likes from './Likes';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';





function Posts({userData}) {
    const[posts,setPost] = useState(null) ;
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
      setOpen(id);
    };
  
    const handleClose = () => {
      setOpen(null);
    };
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
        return unsub 
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
                                    <div className='pp' style={{display: 'flex'}}>
                                        <Avatar  src={userData.profileUrl} />
                                        <h4>{userData.fullName}</h4>
                                    </div>
                                    <Likes userData={userData} postData={post} />
                                    <ChatBubbleIcon className='chat-styling'/>
                                    <Button variant="outlined" onClick={()=>handleClickOpen(id)}> Open form dialog</Button>
                                        <Dialog open={open == post.pId} onClose={handleClose} fullWidth={true} maxWidth='lg'>
                                            <div className='modal-container'>
                                                <div className='video-modal'>
                                                    <video autoPlay={true} muted="muted" controls>
                                                        <source src={post.pUrl}></source>
                                                    </video>
                                                </div>  
                                            </div>      
                                            <div className='comment-modal'>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    alt="green iguana"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Share
                                                    </Button>
                                                </CardActions>
                                                </Card>    
                                            </div>  
                                        </Dialog>
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