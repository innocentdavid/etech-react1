import React from 'react'
import { useEffect, useState } from 'react';
import Footer from './Footer';
import p from './lib/Persons.json'
import Nav from './Nav';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [persons, setPersons] = useState(p)

  useEffect(() => {
    // console.log(searchTerm);
    if (searchTerm) {
      const filtered = persons.filter(person => person.name.includes(searchTerm))
      setPersons(filtered)
    } else {
      setPersons(p)
    }
  }, [searchTerm])

  return (<>
    <Nav />

    <div className="">searchTerm</div>
    <input type="text" className='border' onChange={(e) => setSearchTerm(e.target.value)} />
    <br />
    <br />

    <ul>
      {persons.length > 0 ? persons.map((person, index) => {
        return (
          <li key={index}>{person.name}</li>
        )
      }) : <span>Not found!</span>
      }
    </ul>

    <Footer />
  </>);
}
