import React from 'react';
import '../css/entry.css';

function Entry({ entry }) {
  
  return (
    <div className='entry'>
      <div className='entry-header'>
        <div className='title-column'>
          <h1>{entry.title}</h1>
          <h3>{entry.date}</h3>
        </div>
        {entry.image}
      </div>
      <h3>{entry.description}</h3>
      <a href={entry.link}>Link?</a>
    </div>
  )
}

export default Entry
