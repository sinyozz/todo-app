import React from 'react'
import { removeTodo } from '../actions/Todo.actions'

export default props => {
  function deleteTodo() {
    removeTodo(props.id)
  }

  return (
    <li>
      <p>{props.todoItem}</p>
      <button onClick={deleteTodo}>Delete Todo</button>
    </li>
  )
}