import { PayloadAction, createSlice, isAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from "../todo/interfaces/interfaces";
import moment from 'moment';

const initialState: TodoState = {
    todoCount: 2,
    todos: [
        {   
            id: "1",
            desc: "Hacer las compras",
            completed: false,
            taskType: "HOME",
            date: moment()
        },
        {   
            id: "2",
            desc: "Estudiar",
            completed: true,
            taskType: "WORK",
            date: moment()
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
        completed: action.payload.completed,
        taskType: action.payload.taskType,
        date: action.payload.date
        
    }];
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...action.payload
            };
          }
          return todo;
        });
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
    filterTodo: (state, action: PayloadAction<string>) => {
        state.filter = action.payload;
    },
    deleteAllDoneTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => !todo.completed)
    },
    deleteAllTodo: (state, action) => {
        state.todos = [];
    }
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo, filterTodo,  deleteAllDoneTodo, deleteAllTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
