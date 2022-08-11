import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
        <div style={{display : 'flex' , padding : '0.5rem'}}>
            <h1>Movies App</h1>
            <h1 style={{marginLeft : '2.0rem' , margintop : '1.8rem'}}>Favourites</h1>
        </div>
    )
  }
}

export default NavBar