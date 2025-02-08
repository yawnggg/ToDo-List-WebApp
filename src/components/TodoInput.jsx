import {useState} from "react"

// Component for handling user input and adding todos
export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props    
    return (
        <header>
            {/* Input field where users can type a new todo */}
            <input value = {todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder = "Enter todo..."/>

            {/* Button to add the typed todo to the list */}
            <button onClick={() => {
                handleAddTodos(todoValue)   // Adds the new todo
                setTodoValue('')    // Clears the input field after adding
            }}>Add</button>
        </header>
    )
}