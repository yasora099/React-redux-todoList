import React from 'react'
import Todo from './Todo'

const TodoList = ({filteredTodos, toggleTodos, clearCompleted}) => {
    console.log("-----props------>" )
    return <ul>
        {filteredTodos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}

                onClick={() => toggleTodos(todo.id)}
                onDelete={() => clearCompleted(todo.id)}

            />
        )}
    </ul>
}

export default TodoList
