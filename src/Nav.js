import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (<>
      <nav className='border-b'>
          <ul className='flex gap-5 text-blue-700'>
              <Link to='/' relative="path"><li>Home</li></Link>
              <Link to='/hello'><li className='ml-5'>Hello</li></Link>
              <Link to='/todo'><li className='ml-5'>Todo </li></Link>
              <Link to='/blog'><li className='ml-5'>Blog</li></Link>
          </ul>
      </nav>
      <br /><br />
  </>)
}
