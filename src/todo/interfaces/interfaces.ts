export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
    filteredTodos?: Todo[];
    filter: 'all' | 'done' | 'todo',
}

export interface TodoItemProps {
    todo: Todo
}


export interface TodoFilterType {
    tasks: Todo[];
    filter: 'all' | 'done' | 'todo';
}
  