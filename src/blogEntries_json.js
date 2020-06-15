import React from 'react'
import jun14 from './img/blog/06-14-20.jpeg'
import jun13 from './img/blog/06-13-20.png'
import jun12 from './img/blog/06-12-20.png'
import jun11 from './img/blog/06-11-20.png'

const blogEntries = [
  {
    'title': 'Style Blog, Study JavaScript',
    'date': '6-13-20',
    'description': "I worked on my novel a bunch today. It's so wonderful to return to something that you have developed over time, like gardens, art, sports, code. How wonderful it is to nurture and prune and build, to learn and unlearn, to see change and growth and struggle. To understand connection and stories and perspective. I didn't code a bunch today, but some. 10 more job applications down.",
    'link': '',
    'image': <img className='entry-image' src={jun14}></img>
  },
  {
    'title': 'Style Blog, Study JavaScript',
    'date': '6-13-20',
    'description': 'Had a lot of fun working on a few codewar problems today. Super fun, and I love looking at other peoples interesting solves. Used a nifty ternary today. Love it when I get to use ternary statements irl. Nailed one in my blog site component in react. It was just a simple conditional rendering, but it worked the first time. I love it when that happens. Sometimes, its just the little things that make me smile. Got another 10 applications in today. Somethings gotta catch :)',
    'link': '',
    'image': <img className='entry-image' src={jun13}></img>
  },
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
    'link': 'https://sheltered-lake-36729.herokuapp.com/#/',
    'image': <img className='entry-image' src={jun11}></img>
  }
]

export default blogEntries