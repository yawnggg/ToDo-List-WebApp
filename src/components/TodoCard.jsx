import React from 'react'

// Component representing a single todo item with edit and delete actions
export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem'>
            {/* Display the todo text passed as children */}
            {children}
            {/* Container for action buttons */}
            <div className='actionsContainer'>
                {/* Button to edit the todo, which sets its value in the input field */}
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                {/* Button to delete the todo from the list */}
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
