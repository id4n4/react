
import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../todoReducer"

const initialState = [
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init)

  const handleNewTodo = (e) => {
    dispatch({
      type: 'add',
      payload: e
    })
  }
  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'delete',
      payload: id
    })
  }
  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggle',
      payload: id
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])


  return {
    state,
    count:state.length,
    pending: state.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
