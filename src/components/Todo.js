import React from 'react'

const Todo = ({onClick, completed, text, onDelete}) => (
    <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}

        <button onClick={onClick}>Toggle</button>
        <button hidden={!completed} onClick={onDelete}>Remove</button>
    </li>
)

export default Todo
