import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const{todos, selectedTab} = props
  
  const filteredTodosList = selectedTab === 'All' ? todos :
    selectedTab === 'Completed' ? todos.filter(val => val.complete) :
    selectedTab === 'Active' ? todos.filter(val => !val.complete) : null
  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todos.findIndex(val => val.input == todo.input)} 
            {...props} 
            todo={todo} 
          />
        )
      })}
    </>
  )
}
