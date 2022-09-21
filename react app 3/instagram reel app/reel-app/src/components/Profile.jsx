import React from 'react'
import '../App.css'

function Profile() {
  return (
    <>
      <div className='header'></div>
        <div className="main">
          <div className="img_container">
            <img src = "https://picsum.photos/200" className='pimg' alt=""></img>
          </div>
          <div className="details">
            <div className="content">Name :</div>
            <div className="content">No of posts :</div>
            <div className="content">Mail me :</div>
          </div>
      </div>
    </>
  )
}

export default Profile