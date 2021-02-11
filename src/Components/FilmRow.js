import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {
  const handleDetailsClick =(film) =>{
    console.log(`fetching details for ${film}`)
  }
  return (
      <div className="film-row" onClick={() => handleDetailsClick(props.film.title)}>
        <FilmPoster 
        posterPath={props.film.poster_path} posterAlt={props.film.title} 
        />  
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{props.film.release_date.substring(0,4)}</p>
        </div>
        <Fave />
      </div>
  )
}

export default FilmRow;

