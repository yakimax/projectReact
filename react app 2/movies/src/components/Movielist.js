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
      movies : [],
      currPage : 1 
    }
  }

  async componentDidMount(){

    
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f3d5cc67afc578246bf41c05b08e3164&language=en-US&page=${this.state.currPage}`);
      let responseData = res.data ;
      console.log('CDN third');
      this.setState({
        movies : [...responseData.results]
      })
  }


  changeMovies = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f3d5cc67afc578246bf41c05b08e3164&language=en-US&page=${this.state.currPage}`);
      let responseData = res.data ;
      this.setState({
        movies : [...responseData.results]
      })
  }

  handlePrevious = () => {
    
    if(this.state.currPage != 1){
        this.setState({
        currPage : this.state.currPage-1
      },this.changeMovies)
    }
  }

  handleNext = () =>{
    let tempArr = [] ;
    for(let i = 1 ; i  <= this.state.paginationArr.length+1 ; i++){
      tempArr.push(i) ;
    }
    console.log(tempArr)
    this.setState({
      paginationArr : [...tempArr],
      currPage : this.state.currPage+1
    },this.changeMovies)
  }

  handlePageClick = (value)=>{
      if(this.state.currPage != value){ 
        this.setState({
          currPage : value 
        },this.changeMovies)
      }
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
      

      //third element in movie-card pagination --------------------------------------------------------------------------------
      <div className = 'text-center pagination' style={{ display : 'flex' , justifyContent : 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#" onClick={this.handlePrevious}>Previous</a></li>
              {
                  this.state.paginationArr.map((pagenum)=>(
                    <li class="page-item"><a class="page-link" onClick={()=>{this.handlePageClick(pagenum)}} href="#">{pagenum}</a></li>
                  ))
              }
              <li class="page-item" onClick={this.handleNext}><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
      </div>

      </>
      //fragment ended
    )
  }
}

export default Movielist