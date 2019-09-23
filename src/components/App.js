import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

class App extends Component {

    render() {
        return (
            <div>
                <AddTodo/>
                <Footer/>
                <VisibleTodoList/>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => res.json())
            .then((data) => {
                this.setState({ Todos : data })
            })
            .catch(console.log)
    }
}
export default App
