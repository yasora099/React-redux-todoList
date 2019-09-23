import {constant} from "../constants/constants";

let nextTodoId = 0
export const addTodo = text => ({
  type: constant.ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: constant.TOGGLE_TODO,
  id
})

export const clearCompleted = id => ({
  type: 'CLEAR_COMPLETED',
  id
})
