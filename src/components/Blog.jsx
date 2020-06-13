import React from 'react'
import Entry from './Entry'
import apple from '../img/ctdhs.jpg'
import blogEntries from '../blogEntries_json.js';

function Blog() {

  // const blogEntries = [
  //   {
  //     'title': 'apple',
  //     'date': 'today',
  //     'description': 'like, you know it bro',
  //     'link': '',
  //     'image': <img className='entry-image' src={apple}></img>
  //   },
  //   {
  //     'title': 'pear',
  //     'date': 'yester today',
  //     'description': 'doyou know it?',
  //     'link': '',
  //     'image': ''
  //   }
  // ];

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
