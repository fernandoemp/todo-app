import { PayloadAction, createSlice, isAction } from '@reduxjs/toolkit';
import { TodoState } from "../todo/interfaces/interfaces";

const initialState: TodoState = {
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
            completed: true
        }
    ],
    completed: 0,
    pending: 0,
    filteredTodos: [],
    filter: 'all'
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [ ...state.todos,  {   
        id: action.payload.id,
        desc: action.payload.desc,
        completed: action.payload.completed
    }];
    },
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
        state.todos = state.todos.map(({...todo})=> {
            if (todo.id === action.payload) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
    },
    filterTodo: (state, action: PayloadAction<'all' | 'done' | 'todo'>) => {
        state.filter = action.payload;
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo, filterTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
