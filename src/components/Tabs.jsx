import React from 'react'

export default function Tabs(props) {
  const {todos, selectedTab, setSelectedTab} = props

  const tabs = ['All', 'Active', 'Completed']

  return (
    <nav className='tab-container'>
        {tabs.map((tab, index) => {
          const numOfTasks = tab === 'All' ? todos.length :
            tab  === 'Active' ? todos.filter(todo => !todo.complete).length :
            tab === 'Completed' ? todos.filter(todo => todo.complete).length : 0

          return(
            <button onClick={() => setSelectedTab(tab)} key={index} className={'tab-button ' + (
              tab === selectedTab ? 'tab-selected' : '')}>
                <h4>{tab} <span>({numOfTasks})</span></h4>
            </button>
          )
        })}
        <hr/>
    </nav>
  )
}
