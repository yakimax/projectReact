import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <div className="card banner-card">
        <img src="https://m.media-amazon.com/images/I/71mUK6cPosL._SL1280_.jpg" class="card-img-top banner-img" alt="..."></img>
          <h5 className="card-title banner-title">Mars</h5>
          <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    )
  }
}

export default Banner