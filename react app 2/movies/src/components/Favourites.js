import React, { Component } from 'react';

export class Favourites extends Component {
  constructor(){
    super();
    this.state = {
      currGenre : 'All Genre',
      genres : [],
      movies : [],
      currText : ''
    }
  }

  handleCurrentGenre = (genre)=>{
    this.setState({
      currGenre : genre 
    })    
  }

  componentDidMount(){
    let tempArr = ['All Genre'] ;
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    let oldData = JSON.parse(localStorage.getItem('movies') || '[]' )  ;
    oldData.map((movieObj)=>{
      if(!tempArr.includes(genreids[movieObj.genre_ids[0]])){
        tempArr.push(genreids[movieObj.genre_ids[0]]) ;
      }
    })
    this.setState({
      movies : [...oldData] ,
      genres : [...tempArr]
    })
  }

  handlePopularityDescending = ()=>{
    let temp = this.state.movies ;
    temp.sort((a,b)=>{
      return a.popularity-b.popularity ;
    })
    this.setState({
      movies : temp 
    })
  }

  handlePopularityAscending  = ()=>{
    let temp = this.state.movies ;
    temp.sort((a,b)=>{
      return b.popularity-a.popularity ;
    })
    this.setState({
      movies : temp 
    })
  }
  handleRatingDescending = ()=>{
    let temp = this.state.movies ;
    temp.sort((a,b) => {
      return a.vote_average-b.vote_average ;
    })
    this.setState({
      movies : temp 
    })
  }
  

  handleRatingAscending  = () => {
    let temp = this.state.movies ;
    temp.sort((a,b)=>{
      return b.vote_average-a.vote_average ;
    })
    this.setState({
      movies : temp 
    })
  }
  
  render() {
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    let filterArr = [] ;

    if(this.state.currText == ''){
      filterArr = this.state.movies ;
    }else{
      filterArr = this.state.movies.filter((movieObj)=>
      {
        let title = movieObj.original_title.toLowerCase() ;
        return title.includes(this.state.currText.toLowerCase());
      });
    }
    if(this.state.currGenre != 'All Genre'){
      filterArr = this.state.movies.filter((movieObj)=>(this.state.currGenre == genreids[movieObj.genre_ids[0]])) ;
    }

    return (
      <div className='main'>
        <div className='row'>
          <div className='col-3'>
            <ul class="list-group genre-selector">
              {
                this.state.genres.map((genre)=>(
                  this.state.currGenre == genre ?
                  (<li style = {{background : '#3f51b6' , color : 'white'}}  class="list-group-item">{genre}</li>) :
                  (<li onClick = { ()=>{this.handleCurrentGenre(genre)}} style = {{color : '#3f51b6'}} class="list-group-item">{genre}</li>)
                ))
              }
            </ul>
          </div>
          <div className='col-9 favourites-table'>
            <div className='row'>
              <input placeholder='search' type="text" className="input-group-text col" value = {this.state.currText} onChange={(e)=>{this.setState({currText : e.target.value})}} />
              <input type="number" className="input-group-text col" />
            </div>
            <div className='row'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col"><i class="fa-solid fa-sort-up" onClick={this.handlePopularityAscending}></i>Popularity<i class="fa-solid fa-sort-down" onClick={this.handlePopularityDescending}></i></th>
                    <th scope="col"><i class="fa-solid fa-sort-up" onClick={this.handleRatingAscending}></i>Rating<i class="fa-solid fa-sort-down" onClick={this.handleRatingDescending}></i></th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filterArr.map((movieObj) => (
                      <tr>
                        <th scope="row"><img style={{ width: '5.5rem' }} src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}></img></th>
                        <td>{movieObj.title}</td>
                        <td>{genreids[movieObj.genre_ids[0]]}</td>
                        <th scope="row">{movieObj.popularity}</th>
                        <th scope="row">{movieObj.vote_average}</th>
                        <td><button type="button" class="btn btn-warning">Delete</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='row'>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Favourites