import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (<>
      <nav className='border-b'>
          <ul className='flex gap-5 text-blue-700'>
              <Link to='/' relative="path"><li>Home</li></Link>
              <Link to='/hello'><li className='ml-5'>Hello</li></Link>
          </ul>
      </nav>
      <br /><br />
  </>)
}
