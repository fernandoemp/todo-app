import { CSSProperties } from '@mui/material/styles/createMixins'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../../reducers/TodoSlice';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export const TodoFilter = () => {
  const dispatch = useDispatch();
  const [ valueSelect, setValueSelect ] = useState("");
  const [ selectedFilter, setSelectedFilter ] = useState("");


  const filterStyle: CSSProperties = {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: "center",
      width: "50%",
      margin: "20px 0"
  };

  const inputSelect: CSSProperties = {
    width: "140px",
    background: '#1565c0',
    color: '#ffffffff',
    borderRadius: '5px',
    height: '36px'
  };

  const selectedFilterStyle: CSSProperties = {
    background: '#ff4081',
    color: '#ffffff',
  };

  const handleFilter = (filter: string) => {
    setValueSelect("");
    dispatch(filterTodo(filter));
    setSelectedFilter(filter)
  };

  const handleTaskTypeChange = (event: SelectChangeEvent<string>) => {
    setValueSelect(event.target.value);
    dispatch(filterTodo(event.target.value));
    setSelectedFilter("")
  };

  return (
    <div style={filterStyle}>
      <Button variant="contained" onClick={ () => handleFilter("all")} style={selectedFilter === 'all' ? selectedFilterStyle : {}}>All</Button>
      <Button variant="contained" onClick={ () => handleFilter("done")} style={selectedFilter === 'done' ? selectedFilterStyle : {}}>Done</Button>
      <Button variant="contained" onClick={ () => handleFilter("todo")} style={selectedFilter === 'todo' ? selectedFilterStyle : {}}>Todo</Button>
      <FormControl fullWidth style={inputSelect} >
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleTaskTypeChange}
            style={inputSelect}
            value={valueSelect}>
              <MenuItem selected value={"HOME"}>HOME</MenuItem>
              <MenuItem value={"WORK"}>WORK</MenuItem>
              <MenuItem value={"SPORT"}>SPORT</MenuItem>
        </Select>
        </FormControl>
    </div>
  )
}
