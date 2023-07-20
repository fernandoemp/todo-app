import { IconButton, TextField } from '@mui/material'
import React, { CSSProperties, useState } from 'react'
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import AlertDialog from './AlertDialog';
import { TaskDialog } from './TaskDialog';
import { addTodo, updateTodo } from '../../reducers/TodoSlice';
import { Todo } from '../interfaces/interfaces';
import { v4 as generateUUID } from 'uuid';


export const TodoInput = () => {
    const inputText: CSSProperties = {
        width: "500px"
    };

    const addButton: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        background: '#1565c0',
        borderRadius: '5px',
        color: '#ffffffff'
    };

    const dispatch = useDispatch();
    const [ newTodoText , setNewTodoText ] = useState('');
    const [ openAlertDialog, setOpenAlertDialog ] = useState(false);
    const [ openAddTask, setOpenAddTask ] = useState(false);

    const handlerChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
          setNewTodoText(inputValue);
        }
    };

    const handlerAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            if (newTodoText !== ""){
                openDialogAddTask();
            }
            else {
                setOpenAlertDialog(true);
            }
        }
    };

    const openDialogAddTask = () => {
        setOpenAddTask(true);
    };

    const handleClose = () => {
        setOpenAddTask(false);
    };

    const createNewTask = (desc: string) => {
        const newTodo: Todo = {
          id: generateUUID(),
          desc: desc,
          completed: false,
          taskType: 'HOME'
        };
        dispatch(addTodo(newTodo));
        setNewTodoText('');
      };
    
      const updateExistingTask = (updatedTodo: Todo) => {
        dispatch(updateTodo(updatedTodo));
        setNewTodoText('');
      };

    return (
        <div style={{display: 'flex'}}>
            <TextField 
                id="outlined-basic" 
                style={inputText} 
                label="Add a new task" 
                variant="outlined" 
                value={newTodoText}
                onKeyDown={handlerAddTodo} 
                onChange={handlerChange}/>
            <IconButton onClick={openDialogAddTask} aria-label="Add task" style={addButton}>
                <AddIcon></AddIcon>
            </IconButton>
            <AlertDialog open={openAlertDialog} handleClose={() => setOpenAlertDialog(false)} title='Error' message={"Es necesario que agregue caracteres"}  />
            <TaskDialog
                open={openAddTask}
                handleClose={handleClose}
                title='Add Task'
                task={undefined}
                isEdit={false}
                handleAdd={createNewTask}
                handleUpdate={updateExistingTask}
            />
            {/* <AlertDialog open={openDialogValidationDate} handleClose={() => setOpenDialogValidationDate(false)} title='Error' message={"La fecha debe ser igual o posterior al dia actual"}  /> */}
        </div>
    )
}