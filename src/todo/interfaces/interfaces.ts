import { Moment } from "moment";

export interface Todo {
    id?: string;
    desc?: string;
    completed?: boolean;
    taskType?: string;
    date?: Moment | null;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
    filteredTodos?: Todo[];
    filter: string,
}

export interface TodoItemProps {
    todo: Todo
}

export interface AlertDialogProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    message: string;
  }
  