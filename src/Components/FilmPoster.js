import React from 'react';

const FilmPoster = (props) => {
  let posterUrl=`https://image.tmdb.org/t/p/w780/${props.posterPath}`
  return (
    <img src={posterUrl} alt={props.posterAlt} />
  )
}
  

export default FilmPoster;

