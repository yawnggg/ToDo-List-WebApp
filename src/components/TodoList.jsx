import React from 'react'
import TodoCard from './TodoCard'

// Component responsible for displaying the list of todos
export default function TodoList(props) {
    const { todos } = props // Destructure the todos array from props

    return (
        <ul className = 'main'>
            {/* Loop through the todos array and create a TodoCard for each item */}
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                    {...props}  // Pass down all props to TodoCard
                    key={todoIndex} // Unique key for React rendering optimization
                    index={todoIndex}   // Pass the current index to TodoCard
                    >
                        <p>{todo}</p>   {/* Display the todo text inside the card */}
                    </TodoCard>
                )
            })}
        </ul>
    )
}

