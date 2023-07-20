import { Checkbox, Chip, Divider, IconButton } from '@mui/material';
import { Todo, TodoItemProps } from '../interfaces/interfaces'
import DeleteIcon from '@mui/icons-material/Delete';
import { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../../reducers/TodoSlice';
import EditIcon from '@mui/icons-material/Edit';
import { TaskDialog } from './TaskDialog';

const TodoItem = ( {todo}: TodoItemProps) => {
    const dispatch = useDispatch();
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const li: CSSProperties = {
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px"
    };

    const iconStyle: CSSProperties = {
        padding: "0 10px"
    };

    const divider = {
        background: "White"
    };

    const labelStyle = {
        color: 'white',
    };

    const rightStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center'
    };

    const dividerStyle: CSSProperties = {
        margin: '0 10px',
        background: '#ffffffff'
    };

    const dividerOptionStyle: CSSProperties = {
        margin: '0 3px',
        background: '#ffffffff'
    };

    const handlerToggleTodo = (id?: string) => {
        dispatch(toggleTodo(id));
    }; 

    // const handleUpdateTodo = (updatedTodo: Todo) => {
    //     dispatch(updateTodo(updatedTodo));
    // };
    
    const handlerDeleteTodo = (id?: string) => {
        dispatch(deleteTodo(id));
    };

    const handleCloseEditDialog = () => {
        // dispatch(updateTodo(updatedTodo));
        setOpenEditDialog(false);
      };
    
      const handleUpdateTodo = (updatedTodo: Todo) => {
        setOpenEditDialog(true);
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
                <div style={rightStyle}>
                    <Divider style={dividerStyle} orientation="vertical" variant="middle" flexItem />
                    <Chip label={todo.taskType} color="primary"  />
                    <Divider style={dividerStyle} orientation="vertical" variant="middle" flexItem />
                    <Chip label={todo.date?.format('DD-MM-YYYY')} color="primary"  />
                    <Divider style={dividerOptionStyle} orientation="vertical" variant="middle" flexItem />
                    <IconButton style={iconStyle}>
                        <EditIcon onClick={() => handleUpdateTodo(todo)} />
                    </IconButton>
                    <IconButton style={iconStyle}>
                        <DeleteIcon onClick={() => handlerDeleteTodo(todo.id)}></DeleteIcon>
                    </IconButton>
                    <Divider style={dividerOptionStyle} orientation="vertical" variant="middle" flexItem />
                </div>
            </li>
            <Divider style={divider}/>
            <TaskDialog
                open={openEditDialog}
                handleClose={handleCloseEditDialog}
                title="Edit Task"
                task={todo}
                isEdit={true}
                handleUpdate={handleUpdateTodo}
            />
        </>
    )
}
export default TodoItem