import { Checkbox, Divider } from '@mui/material';
import { TodoItemProps } from '../interfaces/interfaces'
import DeleteIcon from '@mui/icons-material/Delete';
import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../reducers/TodoSlice';

const TodoItem = ( {todo}: TodoItemProps) => {
    const dispatch = useDispatch();

    const li: CSSProperties = {
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px"
    };

    const deleteIcon: CSSProperties = {
        padding: "0 10px"
    };

    const divider = {
        background: "White"
    };

    const labelStyle = {
        color: 'white',
    };

    const handlerToggleTodo = (id: string) => {
        dispatch(toggleTodo(id));
    }; 

    const handlerDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    }; 
    return (
        <>
            <li style={li}>
                <div onDoubleClick={() => handlerToggleTodo(todo.id)}>
                    <Checkbox 
                        onClick={() => handlerToggleTodo(todo.id)} 
                        checked={todo.completed}
                        style={labelStyle}/>
                    {todo.desc}
                </div>
                <DeleteIcon style={deleteIcon} onClick={() => handlerDeleteTodo(todo.id)}></DeleteIcon>
            </li>
            <Divider style={divider}/>
        </>
    )
}
export default TodoItem