import React, { useState, useEffect } from 'react';

const Fave = () => {
  const [isFave, setIsFave] = useState(false);
  const [icon, setIcon] = useState('add_to_queue');

  useEffect (()=>{
    setIcon(isFave ? 'remove_from_queue' : 'add_to_queue');
  }, [isFave]);

  const handleClick = (e) => {
    console.log('handling the handle click')
    let prevState = isFave;
    setIsFave(!prevState);
    e.stopPropagation(e);
  };
  
  return (
    <div className={`film-row-fave ${icon}`} onClick={handleClick}>
      <p className="material-icons">{`${icon}`}</p>
    </div>
  )
}


export default Fave;

