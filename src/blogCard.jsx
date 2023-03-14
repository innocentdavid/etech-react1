import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className="mt-4">
            <div className="border px-4 py-2 w-[200px]">
                <h1 className='mb-2 font-playfairDisplay font-bold'>{blog.title}</h1>
                <p className="text-xs">{blog.description}...<a href='#blog' className='text-blue-800'>read more</a></p>
            </div>
        </div>
    )
}
