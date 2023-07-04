import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const useTodos = () => {
    const { todoState, addTodo, toggleTodo, deleteTodo, filter } = useContext( TodoContext );
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed),
        addTodo,
        toggleTodo,
        deleteTodo,
        filter
    }
   
}

export default useTodos