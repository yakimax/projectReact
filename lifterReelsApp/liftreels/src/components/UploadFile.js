import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import { database ,storage} from '../firebase/firebase';
import {v4 as uuidv4}  from 'uuid' ;


function UploadFile(props) {
  console.log(props.user)
    const [error,setError] = useState('') ;
    const [loading,setLoading] = useState(false) ;

    const handleUpload = async (file)=>{
        if(file == null){
            setError('please select a file') ;
            setTimeout(()=>{
                setError('');
            },2000)
            return ;
        }
        if(file.size/(1024*1024)>10000){
            setError('this file is bigger than the allowed upload size');
            setTimeout(()=>{
                setError('');
            },2000)
            return ;
        }
        let uid = uuidv4() ;
        setLoading(true) ;
        let uploadFun = storage.ref(`/posts/${uid}/${file.name}`).put(file) ;
        uploadFun.on('state_changed',fn1,fn2,fn3) ;
        function fn1(snapshot){
          let progress = (snapshot.bytesTransfered /snapshot.totalBytes)*100 ;
          console.log(`video ${progress}% uploaded`);
        }
        function fn2(err){
          setError(err) ;
          setTimeout(()=>{
            setError('') ;
          },2000)
          setLoading(false);
          return ;
        }
        function fn3(){
          uploadFun.snapshot.ref.getDownloadURL().then((url)=>{
            let obj = {
                likes : [],
                comments : [],
                pId : uid ,
                pUrl : url,
                uName :  props.user.fullName ,
                uprofile : props.user.profileUrl,
                userId : props.user.userID,
                createdAt : database.getTimeStamp()
            }
            database.posts.add(obj).then(async (ref)=>{
                   await database.users.doc(props.user.userID).update({
                   postIds : props.user.postIds != null ? [...props.user.postIds,ref.id] : [ref.id] 
                })
            })
          }).then(()=>{
            setLoading(false);
          }).catch((err)=>{
            setError(err)
            setTimeout(()=>{
                setError('')
            },2000)
            setLoading(false)
          })
        }
          
    }


  return (
    <div>{
            error !== '' ? <Alert severity="error">{error}</Alert> : 
            <>
                <input type='file' accept='video/*' onChange={(e)=>handleUpload(e.target.files[0])} id='upload-input' style={{ display : 'none' }} />
                <label htmlFor='upload-input'>
                    <Button variant='outlined' color='secondary' component = 'span' disabled={loading}>
                        <MovieIcon>
                        </MovieIcon>&nbsp;
                        Upload Video</Button>

                </label>
                {loading && <LinearProgress color="secondary" style={{marginTop : '3%'}}/>}
            </>
        }
    </div>
  )
}

export default UploadFile