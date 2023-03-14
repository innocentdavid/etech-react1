import React, { useEffect, useState } from 'react'
import BlogCard from './blogCard'
import Nav from './Nav'
import './styledComp.css'

export default function Blog() {
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const fetchedBlogs = [
                {
                    slug: 'blog-1',
                    title: 'blog 1',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-2',
                    title: 'blog 2',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-3',
                    title: 'blog 3',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-4',
                    title: 'blog 4',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-5',
                    title: 'blog 5',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-6',
                    title: 'blog 6',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-7',
                    title: 'blog 7',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-8',
                    title: 'blog 8',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-9',
                    title: 'blog 9',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                },
                {
                    slug: 'blog-10',
                    title: 'blog 10',
                    description: 'Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur, adipisicing elit',
                }
            ]

            setBlogs(fetchedBlogs)
            setLoading(false)
        }
        return fetch
    }, [])


    return (<>
        <Nav />
        <div>Blog</div>

        {loading && <div className='mt-4'>Loading...</div>}

        <div className="flex flex-wrap gap-4" style={{ backgroundColor: 'red', color: 'white' }}>
            {blogs.map((blog) => {
                return (
                    <BlogCard key={blog?.slug} blog={blog} />
                )
            })}
        </div>
    </>)
}
