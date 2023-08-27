import React, { useEffect,useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase/firebase';
import './Posts.css'

function Likes({userData,postData}) {
    const [like,setLike] = useState(null) ;
    useEffect(()=>{
        let check = postData.likes.includes(userData.userId) ? true : false ;
        setLike(check) ;
    },[postData])
    const handleClick = ()=>{
        if(like===true){
            let narr = postData.likes.filter((el)=>
                 el !== userData.userId
            )
            database.posts.doc(postData.postId).update({
                likes : narr 
            });
        }else{
            let narr = [...postData.likes ,userData.userId ]
            database.posts.doc(postData.postId).update({
                likes : narr 
            });
        }
    }

  return (
    <div>
        {
            like !== null ?
            <>
                {
                    like===true ? <FavoriteIcon onClick={handleClick} className={'icon-styling like'}/> : <FavoriteIcon onClick={handleClick} className={'icon-styling unlike'}/>
                }
            </> :
            <>

            </>
        }
    </div>
  )
}

export default Likes