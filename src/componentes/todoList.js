import React, { useState } from 'react'
import TodoForm from "./todoForm"
function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodo = [todo, ...todos]

        setTodos(newTodo)
        console.log(...todos);
    }
    return (
        <div>
            <h1>what the plan dummy </h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList