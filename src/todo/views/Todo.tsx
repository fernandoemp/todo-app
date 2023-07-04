import { CSSProperties } from "react"
import { TodoList } from "../components/TodoList"
import TodoTitle from "../components/TodoTitle"
import TodoProvider from "../context/TodoProvider"
import TodoInput from "../components/TodoInput"
import TodoFilter from "../components/TodoFilter"

const Todo = () => {
  const containerTodo: CSSProperties  = {
    width: "50%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    alignItems: "center",
    height: "80vh"
  }
  return (
    <TodoProvider>
      <div style={containerTodo}>
        <TodoTitle></TodoTitle>
        <TodoInput></TodoInput>
        <TodoFilter></TodoFilter>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  )
}

export default Todo