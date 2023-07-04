import { useReducer } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {   
            id: "1",
            desc: "Hacer las compras",
            completed: false
        },
        {   
            id: "2",
            desc: "Estudiar",
            completed: false
        }
    ],
    completed: 0,
    pending: 0,
    filter: 'all'
}

const TodoProvider = ({ children }: props) => {
    const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE );

    const addTodo = ( todo: Todo ) => {
        dispatch( { type: 'addTodo', payload: todo })
    }

    const toggleTodo = ( id: string ) => {
        dispatch( { type: 'toggleTodo', payload: { id } })
    }

    const deleteTodo = ( id: string ) => {
        dispatch( { type: 'deleteTodo', payload: { id } })
    }

    const filter = ( filterType: string ) => {
        dispatch( { type: 'filter', payload: { filterType } })
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            addTodo,
            toggleTodo,
            deleteTodo,
            filter
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoProvider

interface props {
    children: JSX.Element | JSX.Element[]
}