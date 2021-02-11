import React, { useState } from 'react';
import './App.css';
import TMDB from './TMDB'

import FilmListing from './Components/FilmListing';
import FilmDetails from './Components/FilmDetails';

const App = () => {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  return (
    <div id='Container' className='film-library'>
      <FilmListing films={films} />
      <FilmDetails films={current} />
      
    </div>
  );
};

export default App;