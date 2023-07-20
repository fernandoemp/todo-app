import { Button } from '@mui/material'
import { CSSProperties } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAllDoneTodo, deleteAllTodo } from '../../reducers/TodoSlice';

const buttonStyle: CSSProperties = {
    background: '#1565c0',
    color: '#ffffffff',
    margin: '0 20px'
}

export const TodoOptionsDelete = () => {
    const dispatch = useDispatch();

    const handleDeleteDoneTask = () => {
        dispatch(deleteAllDoneTodo(null));
    };

    const handleDeleteAllTask = () => {
        dispatch(deleteAllTodo(null));
    };

    return (
        <div>
            <Button style={buttonStyle} onClick={ () => handleDeleteDoneTask()}>Delete Done Task</Button>
            <Button style={buttonStyle} onClick={ () => handleDeleteAllTask()}>Delete All Task</Button>
        </div>
    )
}
