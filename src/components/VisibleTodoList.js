import {connect} from 'react-redux'
import {clearCompleted, toggleTodo} from '../action'
import TodoList from './TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => {
    console.log("========>", state)
    return {filteredTodos: getVisibleTodos(state.todos, state.visibilityFilter)}
}


const mapDispatchToProps = dispatch => ({
    toggleTodos: id => dispatch(toggleTodo(id)),
    clearCompleted: id => dispatch(clearCompleted(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
