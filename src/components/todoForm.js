import React, { useState } from 'react'
import { create } from '../actions/Todo.actions'
import { useSelector } from 'react-redux'
import Todo from './todo'
import '../styles/App.css'




export default props => {
  const [todoItem, setTodoItem] = useState('')
  const todos = useSelector(appState => appState.todos)



  function createTodo(e) {
    e.preventDefault()
    create(todoItem)
  }

  return (
    <div id='container'>
      <header id='mainHeader'>
        <h1>Recuerda!</h1>
      </header>
      <div id='enterTodo'>
        <div id='inputDiv'>
          <input type='text' value={todoItem} onChange={e => setTodoItem(e.target.value)} placeholder='Lista de cosas que hacer'></input>
        </div>
        <div id='addDiv'>
          <button id='addTodo' onClick={createTodo}>Add Todo</button>
        </div>
      </div>
      <div>
        <ul>
          {todos.map((todo, id) => (
          <div>
            <li className='todoListItem'><Todo key={'todo'+id} {...todo}/></li>
          </div>
        ))}
        </ul>
      </div>
    </div>
  )
}
