import React from 'react'
import Entry from './Entry'
import blogEntries from '../blogEntries_json.js';

function Blog() {

  return (
    <div>
      <div className='titleWrapper'>
        <h1 className='title'>Blog</h1>
      </div>
      {blogEntries.map((entry, i) => (
        <Entry key={i} entry={entry} />
      ))}
    </div>
  )
}

export default Blog
