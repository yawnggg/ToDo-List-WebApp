import { useState, useEffect } from "react"  // Importing useState for state management and useEffect for side effects
import TodoList from "./components/TodoList" // Importing the TodoList component
import TodoInput from "./components/TodoInput" // Importing the TodoInput component

function App() {

  // State to store the list of todos
  const [todos, setTodos] = useState([])

  // State to track the input value when editing a todo
  const [todoValue, setTodoValue] = useState('')

  
  // Saves the todos array to local storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  
  // Adds a new todo to the list.
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] // Create a new array with the existing todos and the new todo
    persistData(newTodoList) // Save updated list to local storage
    setTodos(newTodoList) // Update state with the new list
  }

  // Deletes a todo item from the list.
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index // Keep only the todos that do not match the given index
    })
    persistData(newTodoList) // Save updated list to local storage
    setTodos(newTodoList) // Update state with the new list
  }

  // Edits a todo item by setting its value in the input field and removing it from the list
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index] // Get the value of the todo that needs to be edited
    setTodoValue(valueToBeEdited) // Set the input field to this value
    handleDeleteTodo(index) // Remove the todo from the list so it can be updated
  }

  // Load todos from local storage when the app starts
  useEffect(() => {
    if (!localStorage) { // Check if localStorage is available
      return
    }

    let localTodos = localStorage.getItem('todos') // Retrieve stored todos from localStorage
    if (!localTodos) { // If there are no todos stored, exit
      return
    }

    localTodos = JSON.parse(localTodos).todos // Parse the stored JSON and extract the todos array
    setTodos(localTodos) // Set the state with the stored todos

  }, []) // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {/* TodoInput component for adding and editing todos */}
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
      />

      {/* TodoList component for displaying and managing todos */}
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        todos={todos} 
      />
    </>
  )
}

export default App // Exporting the App component for use in the main application

