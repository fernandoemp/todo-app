import { CSSProperties } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";

export const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => {
      switch (state.todo.filter) {
        case "done": 
          return state.todo.todos.filter((task) => task.completed);
        break;
        case "todo": 
          return state.todo.todos.filter((task) => !task.completed);
        break;
        case "HOME": 
          return state.todo.todos.filter((task) => task.taskType === "HOME");
        break;
        case "WORK": 
          return state.todo.todos.filter((task) => task.taskType === "WORK");
        break;
        case "SPORT": 
          return state.todo.todos.filter((task) => task.taskType === "SPORT");
        break;
        default:
          return state.todo.todos;
        break;
      }
    });

    const containerList: CSSProperties = {
        borderRadius: "10px",
        backgroundColor: "gray",
        width: "80%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        overflowY: "auto",
        height: '45%'
    }
    
    return (
        <ul style={containerList}>
            { todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )}
        </ul>
    )
}