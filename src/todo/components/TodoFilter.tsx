import { CSSProperties } from '@mui/material/styles/createMixins'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../../reducers/TodoSlice';

const TodoFilter = () => {
    const dispatch = useDispatch();

    const filterStyle: CSSProperties = {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        margin: "20px 0"
    }

    const handleFilter = (filter: 'all' | 'done' | 'todo') => {
      dispatch(filterTodo(filter));
    };

  return (
    <div style={filterStyle}>
        <Button variant="contained" onClick={ () => handleFilter("all")}>All</Button>
        <Button variant="contained" onClick={ () => handleFilter("done")}>Done</Button>
        <Button variant="contained" onClick={ () => handleFilter("todo")}>Todo</Button>
    </div>
  )
}

export default TodoFilter
