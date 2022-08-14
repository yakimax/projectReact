import React, { Component } from 'react';
import { movies } from '../movie';

export class Favourites extends Component {
  constructor(){
    super();
    this.state = {
      currGenre : 'All Genre'
    }
  }

  render() {
    let movieArr = movies.results;

    let tempArr = ['All Genre'] ;
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    
    movieArr.map((movieObj)=>{
      if(!tempArr.includes(genreids[movieObj.genre_ids[0]])){
        tempArr.push(genreids[movieObj.genre_ids[0]]) ;
      }
    })

    return (
      <div className='main'>
        <div className='row'>
          <div className='col-3'>
            <ul class="list-group genre-selector">
              { 
              
                tempArr.map((genres)=>(
                  this.state.currGenre == genres ?
                  <li style = {{background : '#3f51b6' , color : 'white'}} class="list-group-item">{genres}</li> :
                  <li style = {{color : '#3f51b6'}} class="list-group-item">{genres}</li> 
                ))
              }
            </ul>
          </div>
          <div className='col-9 favourites-table'>
            <div className='row'>
              <input placeholder='search' type="text" className="input-group-text col" />
              <input type="number" className="input-group-text col" />
            </div>
            <div className='row'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    movieArr.map((movieObj) => (
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