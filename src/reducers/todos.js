const todos = (state = [], action) => {
    switch (action.type) {

        case 'ADD_TODO':
            console.log("------>", action.text)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'CLEAR_COMPLETED':
            console.log(action.id)
            return state.filter(t => t.id !== action.id)


        default:
            return state
    }
}

export default todos
