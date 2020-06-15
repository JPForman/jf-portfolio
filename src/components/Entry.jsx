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
        <div className='image-column'>
          {entry.image}
        </div>
      </div>
      <h3>{entry.description}</h3>
      {entry.link != '' ?
      <a className='blog-link' href={entry.link}>{entry.title} Live</a>
      : null}
    </div>
  )
}

export default Entry
