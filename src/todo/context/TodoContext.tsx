import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState;
    addTodo: ( todo: Todo ) => void;
    toggleTodo: ( id: string ) => void;
    deleteTodo: ( id: string ) => void;
    filter: ( type: string ) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps) ;