import { CSSProperties } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";

export const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => {
      switch (state.todo.filter) {
        case 'done':
          return state.todo.todos.filter((task) => task.completed);
        case 'todo':
          return state.todo.todos.filter((task) => !task.completed);
        default:
          return state.todo.todos;
      }
    });

    const dispatch = useDispatch();

    const containerList: CSSProperties = {
        borderRadius: "10px",
        backgroundColor: "gray",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflowY: "auto"
    }
    
    return (
        <ul style={containerList}>
            { todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )}
        </ul>
    )
}