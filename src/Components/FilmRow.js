import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {
  
  return (
      <div className="film-row" onClick={() => {props.handleDetailsClick(props.film)}}>
        <FilmPoster 
        posterPath={props.film.poster_path} posterAlt={props.film.title} 
        />  
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{props.film.release_date.substring(0,4)}</p>
        </div>
        <Fave onFaveToggle={()=> {props.onFaveToggle(props.film)}} isFave={props.isFave}/>
      </div>
  )
}

export default FilmRow;

