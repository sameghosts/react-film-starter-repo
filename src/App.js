import React from 'react';
import './App.css';
import TMDB from './TMDB'

import FilmListing from './Components/FilmListing';
import FilmDetails from './Components/FilmDetails';

const App = () => {
  return (
    <div id='Container' className='film-library'>
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
      
    </div>
  );
};

export default App;