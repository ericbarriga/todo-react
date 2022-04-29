import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState("")
    // we are targetting the inout so we can see it on the screen 
    const handleChange = e => {
        setInput(e.target.value)
    }
    // this is making it so that it doesnt keep refreshing on every submit 
    const handleSubmit = e => {
        e.preventDefault();
        // created a prop to use 
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput('')
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <button className="todo-button">add a todo</button>
        </form>
    )
}

export default TodoForm;