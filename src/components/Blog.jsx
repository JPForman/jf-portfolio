import React from 'react'



function Blog() {

  // const blogEntries = ['a','b','c']

  const blogEntries = [
    {
      'name': 'apple',
      'date': 'today',
      'content': 'like, you know it bro'
    },
    {
      'name': 'pear',
      'date': 'yester today',
      'content': 'doyou know it?'
    }
  
  ];

  return (
    <div>
      <div className='titleWrapper'>
        <h1 className='title'>Blog</h1>
      </div>
      {blogEntries.map((entry, i) => (
        // <Entry key={i} entry={entry} />

        <p>{entry.name} number {i}</p>
      ))}
    </div>
  )
}

export default Blog
