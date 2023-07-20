import { CSSProperties } from "react"
import { TodoList } from "../components/TodoList"
import TodoTitle from "../components/TodoTitle"
import { TodoFilter } from "../components/TodoFilter"
import { TodoInput } from "../components/TodoInput"
import { TodoOptionsDelete } from "../components/TodoOptionsDelete"

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
    
    <div style={containerTodo}>
      <TodoTitle></TodoTitle>
      <TodoInput></TodoInput>
      <TodoFilter></TodoFilter>
      <TodoList></TodoList>
      <TodoOptionsDelete></TodoOptionsDelete>
    </div>

  )
}

export default Todo