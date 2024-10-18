import React, { useState } from 'react'

export default function Header(props) {

  const { todos } = props

  const numOfTasks = todos.filter(todo => !todo.complete).length

  const todosLength = todos.length
  const isPlural = todosLength === 1 ? false : true

  return (
    <header>
        <h1 className='text-gradient'>You have {numOfTasks} open {isPlural? 'tasks' : 'task'}</h1>
    </header>
  )
}
