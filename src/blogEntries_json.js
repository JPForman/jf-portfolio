import React from 'react'
import jun25 from './img/blog/06-25-20.png'
import jun17 from './img/blog/06-17-20.png'
import jun14 from './img/blog/06-14-20.jpeg'
import jun13 from './img/blog/06-13-20.png'
import jun12 from './img/blog/06-12-20.png'
import jun11 from './img/blog/06-11-20.png'
import jun02 from './img/blog/06-02-20.png'

const blogEntries = [
  {
    'title': "Covid Tracker",
    'date': '6-28-20',
    'description': "studying big O notation today. super simple, especially thinking back to calculus. i loved teaching that class. shoutout to KodingKevin for some clean explainations. love studying algorithms and this kind of dorky stuff. listened to sean carrol and scott aaronson talk about complexity, computation, and quantum gravity...twice on repeat.",
    'link': 'https://www.youtube.com/channel/UCXpGqiSd3BD0FQ9OP3ziFsw',
    'image': <img className='entry-image' src={jun25}></img>
  },
  {
    'title': "Covid Tracker",
    'date': '6-25-20',
    'description': "Been working with React, Chart.js, Material UI, and api calls to create a covid-19 tracker. Took a few days, but it's created and hosted on heroku. Unfortunately, I had to take down the movie database search because of the 5 item cap for us broke people at heroku. Special thanks to {JS} Mastery for the tutorial. Love working with data, especially with a public service and social justice agenda. hans rosling = hero status",
    'link': 'https://mighty-chamber-80612.herokuapp.com/#/',
    'image': <img className='entry-image' src={jun25}></img>
  },
  {
    'title': 'MERN Stack',
    'date': '6-17-20',
    'description': "Been studying some MERN stack. I created a fitness tracker using MERN that has full CRUD capabilities. Used bootstrap, postman, and axios along with the obvious MERN stack. Love ya freeCodeCamp! I love being in a field that has such an impressive and evolving cannon of online educational resources. Brilliant minds of all ages and ethnicities sharing and developing together, freakin awesome.",
    'link': '',
    'image': <img className='entry-image' src={jun17}></img>
  },
  {
    'title': 'Style Blog & Hit Codewars',
    'date': '6-13-20',
    'description': 'Had a lot of fun working on a few codewar problems today. Super awesome puzzles, and I love looking at other peoples interesting solves. Used a nifty ternary today. Love it when I get to use ternary statements irl. Nailed one in my blog site component in react. It was just a simple conditional rendering, but it worked the first time. I love it when that happens. Sometimes, its just the little things that make me smile.',
    'link': '',
    'image': <img className='entry-image' src={jun13}></img>
  },
  {
    'title': 'Blog Site Is Up',
    'date': '6-12-20',
    'description': 'Today I added this blog component to my portfolio site. I built out the React front end to take an array of objects, the blog entries, and map them into the cards we see here today. The whole thing still really needs styling and a real back end, but I wanted to get it off the ground. I am happy to just polish it as we go.',
    'link': '',
    'image': <img className='entry-image' src={jun12}></img>
  },
  {
    'title': 'React Movie Database Search Application',
    'date': '6-11-20',
    'description': 'I created a simple React app that allows users to search the OMDB api by key word in a title. The return is a series of clickable movie poster cards, each giving a popup containing movie details. The program uses axios to make the api calls. Super friendly to use. The tutorial was excellent. I even managed to get it hosted onto heroku after some trouble shooting :)',
    'link': 'https://sheltered-lake-36729.herokuapp.com/#/',
    'image': <img className='entry-image' src={jun11}></img>
  },
  {
    'title': 'Instant Messeger: React, Firestore, and Firebase Auth',
    'date': '6-2-20',
    'description': "Made an instant messager using the awesome tutorial by PortEXE. Firebase's Firestore and auth are made super user friendly, especially with a great teacher! First time using material-ui for styling, clean and professional. I definitely had a few stumbling blocks, but in the end have a fully functioning instant messager with auth and a noSQL database :)",
    'link': '',
    'image': <img className='entry-image' src={jun02}></img>
  },
]

export default blogEntries