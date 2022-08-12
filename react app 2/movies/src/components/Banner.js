import React, { Component } from 'react'
import { movies } from '../movie';

export class Banner extends Component {
  render() {
    let movieElement = movies.results[Math.floor(Math.random()*movies.results.length) + 1] ;
    let backdrop = movieElement.backdrop_path ;
    let title = movieElement.title ;
    let description = movieElement.overview ;
    return (
        <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${backdrop}`} class="card-img-top banner-img" alt="..."></img>
          <h5 className="card-title banner-title">{title}</h5>
          <p className="card-text banner-text">{description}</p>
        </div>
    )
  }
}

export default Banner