
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../reducers/TodoSlice';
import { v4 as generateUUID } from 'uuid';
import { Todo } from '../interfaces/interfaces';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { Moment } from 'moment';
import moment from 'moment';
interface TaskDialogProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    task?: Todo;
    isEdit?: boolean;
    handleAdd?: (desc: string) => void;
    handleUpdate?: (updatedTodo: Todo) => void;
}

export const TaskDialog: React.FC<TaskDialogProps> = ({ open, handleClose, title, task, isEdit = false }) => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState(task?.desc || '');
    const [taskType, setTaskType] = useState(task?.taskType || 'HOME');
    const [ selectedDate, setSelectedDate ] = useState<Moment | null>(moment());

    const inputText: CSSProperties = {
        width: "500px"
    };

    const inputSelect: CSSProperties = {
        width: "30%"
    };

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoText(e.target.value);
    };

    const handleTaskTypeChange = (event: SelectChangeEvent<string>) => {
        setTaskType(event.target.value)
    };

    const handlerAddOrUpdateTodo = () => {
        const updatedTodo: Todo = {
            ...task!,
            desc: newTodoText,
            taskType: taskType
        };

        if (isEdit) {
            dispatch(updateTodo(updatedTodo));
        } 
        else 
        {
            const newTodo: Todo = {
                id: generateUUID(),
                desc: newTodoText,
                completed: false,
                taskType: taskType,
                date: selectedDate
            };
            dispatch(addTodo(newTodo));
        }
        handleClose();
    };

    const handleDateChange = (date: Moment | null) => {
        if (date && date.isBefore(moment(), 'day')) {
            setSelectedDate(null);
        } 
        else {                
            setSelectedDate(date);
        }
    };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <TextField
            id="outlined-basic"
            style={inputText}
            label={title}
            variant="outlined"
            value={newTodoText}
            onChange={handlerChange}
            />
            <div style={{ margin: '20px 0' }}>
                <FormControl fullWidth style={inputSelect}>
                    <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={taskType}
                        label="Task Type"
                        onChange={handleTaskTypeChange}>
                        <MenuItem value={"HOME"}>HOME</MenuItem>
                        <MenuItem value={"WORK"}>WORK</MenuItem>
                        <MenuItem value={"SPORT"}>SPORT</MenuItem>
                    </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>
            </div>
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handlerAddOrUpdateTodo} autoFocus>
          {isEdit ? 'Update' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};