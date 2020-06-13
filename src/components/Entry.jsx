import React from 'react';
import '../css/entry.css';

function Entry({ entry }) {
  
  return (
    <div className='entry'>
      <div className='entry-header'>
        <div>
          <h1>Title: {entry.title}</h1>
          <h3>Date: {entry.date}</h3>
        </div>
        {entry.image}
      </div>
      <h3>Description: {entry.description}</h3>
      <a href={entry.link}>Link?</a>
    </div>
  )
}

export default Entry
