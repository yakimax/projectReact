import React, { Component } from 'react'
// import {movies} from '../movie'
import axios from 'axios'

export class Movielist extends Component {
  
  constructor(){
    super() ;
    console.log('constructor first')
    this.state = {
      hover: '',
      paginationArr : [1] ,
      movies : []
    }
  }

  async componentDidMount(){

    
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f3d5cc67afc578246bf41c05b08e3164&language=en-US&page=1');
      let responseData = res.data ;
      console.log('CDN third');
      console.log(responseData) ;
      this.setState({
        movies : [...responseData.results]
      })
  }

  render() {
    console.log('render second');

    return (



      //fragment started

      <>
      //first element in movie-card----------------------------------------------
      <div>
        <h3 className = "text-center"><strong>Trending</strong></h3>
      </div>
      

      //second element in movie-card----------------------------------------------------------------------------------------------------------------------------
      <div className = 'movie-list'>
        {
            this.state.movies.map((movieObj) => (
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
      

      //third element in movie-card --------------------------------------------------------------------------------
      <div className = 'text-center pagination' style={{ display : 'flex' , justifyContent : 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              {
                  this.state.paginationArr.map((pagenum)=>{
                    <li class="page-item"><a class="page-link" href="#">{pagenum}</a></li>
                  })
              }
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