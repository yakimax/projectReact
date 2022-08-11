import React, { Component } from 'react'
import {movies} from '../movie'
export class Movielist extends Component {
  render() {
    let movieArr = movies.results
    return (
        movieArr.map((movieObj) => (
            <h1>{movieObj.title}</h1>
        ))
    )
  }
}

export default Movielist