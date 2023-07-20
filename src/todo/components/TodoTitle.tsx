import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/Store';

const TodoTitle = () => {
  const pendingTodos = useSelector((state: RootState) => {
        return state.todo.todos.filter( todo => !todo.completed);
  });

  return (
    <h1>
        Todos: { pendingTodos.length }
    </h1>
  )
}

export default TodoTitle