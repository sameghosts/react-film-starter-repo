import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'
class FilmRow extends Component {
  constructor(props){
    super(props)
  }
  render() {
  
    return (
      <div className="film-row">
        <FilmPoster posterPath={this.props.film.poster_path} posterAlt={this.props.film.title} />  
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.substring(0,4)}</p>
        </div>
        <Fave />
      </div>
    )
  }
}

export default FilmRow;

