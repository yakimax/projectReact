import  { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
        <div style={{display : 'flex' , padding : '0.5rem'}}>
            <Link to = '/' style = {{textDecoration : 'none'}}><h1>Movies App</h1></Link>
            <Link to = '/favourites' style = {{textDecoration : 'none'}}><h1 style={{marginLeft : '2.0rem' , margintop : '1.8rem'}}>Favourites</h1></Link>
        </div>
    )
  }
}

export default NavBar