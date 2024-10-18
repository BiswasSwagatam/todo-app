import React, { useState } from 'react'



export default function TodoInput(props) {

  const {handleAddTodo} = props
  const [input, setInput] = useState('')
  console.log(input)
  return (
    <div  className='input-container'>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Todo'/>
      <button onClick={() => {
        if(!input) {return}
        handleAddTodo(input)
        setInput('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}
