import React, { Component } from 'react'
import './style.css'

export class Movie extends Component {
  render() {
    return (
      <>

        <h2>{this.props.movie.Title} </h2>
        <p>{ this.props.movie.Year} </p>
        
        <img src={this.props.movie.Poster} className='container-images' alt={ this.props.movie.Title} />


      </>
    )
  }
}

export default Movie
