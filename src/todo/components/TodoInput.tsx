import { TextField } from '@mui/material'
import React, { CSSProperties, useState } from 'react'
import { Todo } from '../interfaces/interfaces';
import { v4 as generateUUID } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/TodoSlice';

const TodoInput = () => {
    const inputText: CSSProperties = {
        width: "80%"
    };

    const dispatch = useDispatch();
    const [ newTodoText , setNewTodoText] = useState('');
  
    const handlerChange = (e: { target: { value: React.SetStateAction<string> }; }) => {
        setNewTodoText(e.target.value);
      };

    const handlerAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            event.stopPropagation();
            const newTodo: Todo = {
                id: generateUUID(),
                desc: newTodoText,
                completed: false
            }
            dispatch(addTodo(newTodo));
            setNewTodoText('');
        }
    };

    return (
        <TextField 
            id="outlined-basic" 
            style={inputText} 
            label="Ingrese una nueva tarea" 
            variant="outlined" 
            value={newTodoText}
            onKeyDown={handlerAddTodo} 
            onChange={handlerChange}/>
    )
}

export default TodoInput
