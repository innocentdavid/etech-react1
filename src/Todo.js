import React, { useState } from 'react'
import Nav from './Nav'

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const removeItem = (item) => {
        const filtered = todos.filter((i) => i !== item)
        setTodos(filtered)
    }

    return (<>
        <Nav />
        <div className='text-3xl'>My bucket List App</div>

        <form action="" className="mt-6" onSubmit={(e) => {
            e.preventDefault()
            setTodos([...todos, input])
            setInput('')
        }}>
            <div className="">
                <input type="text" className='border' value={input} onChange={(e) => setInput(e.target.value)} required />
                <button className="bg-blue-500 text-white px-6">add</button>
            </div>
        </form>

        <div className="py-4">
            <ul className='list-disc ml-5'>
                {todos.map((todo, index) => {
                    return (
                        <div key={index} className="flex items-center gap-6 border-b mb-2">
                            <li>{todo}</li>
                            <span className='w-3 h-3 bg-green-600 cursor-pointer' 
                            onClick={() => removeItem(todo)}></span>
                        </div>
                    )
                })}
            </ul>
        </div>
    </>)
}
