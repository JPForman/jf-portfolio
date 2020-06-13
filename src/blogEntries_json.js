import React from 'react'
import jun12 from './img/blog/06-12-20.png'
import jun11 from './img/blog/06-11-20.png'

const blogEntries = [
  {
    'title': 'Blog Site Is Up',
    'date': '6-12-20',
    'description': 'Today I added this blog component to my portfolio site. I built out the React front end to take an array of objects, the blog entries, and map them into the cards we see here today. The whole thing still really needs styling and a real back end, but I wanted to get it off the ground. I am happy to just polish it as we go. 10 more jobs applied to.',
    'link': '',
    'image': <img className='entry-image' src={jun12}></img>
  },
  {
    'title': 'React Movie Database Search Application',
    'date': '6-11-20',
    'description': 'I created a simple React app that allows users to search the OMDB api by key word in a title. The return is a series of clickable movie poster cards, each giving a popup containing movie details. The program uses axios to make the api calls. Super friendly to use. The tutorial was excellent. I even managed to get it hosted onto heroku after some trouble shooting :) Got 10 job applications in today.',
    'link': '',
    'image': <img className='entry-image' src={jun11}></img>
  }
]

export default blogEntries