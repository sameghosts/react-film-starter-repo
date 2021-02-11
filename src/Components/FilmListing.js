import { useState } from 'react';
import FilmRow from './FilmRow'

const FilmListing = (props) => {
  const [filter, setFilter] = useState ('all');
  const [faves, setFaves] = useState ([]);
  
  const handleFilterClick =(filter) => {
    console.log(`Setting Filter to ${filter}`)
    setFilter(filter);
  }
  const handleFaveToggle = (film) => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex >= 0) {
      console.log(`Removing ${film.title} from faves...`)
      newFaves.splice(filmIndex, 1);
    } else {
      console.log(`Adding ${film.title} to faves...`)
      newFaves = [...newFaves, film];
    }
    setFaves(newFaves)
  }
  let allFilms = props.films.map((film, i) => {
    return (
      <FilmRow 
        film={film} 
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)} 
        handleDetailsClick={props.handleDetailsClick}
        key={`film-row-${i}`} 
      />
    )
  })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=> {handleFilterClick('all')}}>
            ALL 
            <span className="section-count">{props.films.length}</span>
          </div>
            <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=> {handleFilterClick('faves')}}>
              FAVES
              <span className="section-count">{faves.length}</span>
            </div>
        </div>
        {allFilms}
      </div>
    );
  }


export default FilmListing;