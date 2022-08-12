import React, { Component } from 'react'
import {movies} from '../movie'
export class Movielist extends Component {
  
  constructor(){
    super() ;
    this.state = {
      hover: ''
    }
  }
  render() {

    let movieArr = movies.results ;

    return (
      //fragment started

      <>
      //first element in movie-card---------------------------------
      <div>
        <h3 classname = "text-center"><strong>Trending</strong></h3>
      </div>
      

      //second element in movie-card----------------------------------------------------------------------------------------------------------------------------
      <div className = 'movie-list'>
        {
            movieArr.map((movieObj) => (
            <div className="card movie-card" onMouseEnter={ () => {this.setState({hover : movieObj.id})}} onMouseLeave ={()=>{this.setState({hover : '' })}} >
                
                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{height : '40vh' ,width : '20vw'}} className ="card-img-top movie-img" alt="..."></img>
                <h5 className="card-title movie-title">{movieObj.title}</h5>
                
                <div className = 'button-wrapper' style={{display : 'flex' , justifyContent : 'center'}}>
                { 
                    this.state.hover == movieObj.id &&
                    <a href="#" className="btn btn-primary movie-button text-center">Add to Favourites</a>
                }
                </div>
            
            </div>
            ))
        }
      </div>
      

      //third element in movie-card --------------------------------------------------------------------
      <div className = 'text-center pagination' style={{ display : 'flex' , justifyContent : 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
      </div>

      </>
      //fragment ended
    )
  }
}

export default Movielist