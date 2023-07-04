import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string }}
    | { type: 'deleteTodo', payload: { id: string }}
    | { type: 'filter', payload: { filterType: string }}

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

    switch ( action.type) {
        case 'addTodo':
            return {
                ...state, 
                todos: [ ...state.todos, action.payload ]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo})=> {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)

            }    
        case 'filter':
            const originalTodos = state.todos; // Almacenar una copia del arreglo original
            const filterType = action.payload.filterType;
            let filteredTodos: Todo[];
            if (filterType === 'Done') {
                filteredTodos = [...originalTodos.filter((todo) => todo.completed)];
            } else if (filterType === 'Todo') {
                filteredTodos = [...originalTodos.filter((todo) => !todo.completed)];
            } else {
                filteredTodos = [...originalTodos]; // Filtro 'All', se mantiene sin cambios
            }
            if (filteredTodos.length == 0){
                filteredTodos = [...originalTodos]; // Filtro 'All', se mantiene sin cambios
            }
            return {
                ...state,
                todos: filteredTodos
            };
        default:
            return state;
    }
};