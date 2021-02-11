import React, { useState } from 'react';
import './App.css';
import TMDB from './TMDB'

import FilmListing from './Components/FilmListing';
import FilmDetails from './Components/FilmDetails';

const App = () => {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick =(film) =>{
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div id='Container' className='film-library'>
      <FilmListing films={films} />
      <FilmDetails handleDetailsClick={handleDetailsClick} film={current} />
      
    </div>
  );
};

export default App;