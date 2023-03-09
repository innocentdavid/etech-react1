import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

export default function Hello() {
    return (
        <>
            <Nav />

            <div className="">
                Hello
            </div>

            <Footer />
        </>
    )
}
