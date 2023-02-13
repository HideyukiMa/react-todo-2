import { Todo } from "../../../types/todo";

// initialStateの型を定義
export interface TodoState {
	todoList: Todo[] | undefined;
	todoDetail: Todo;
	focusTodoId: number;
	
}
// initialTodoListを定義

export interface DeleteTodoArgs {
	todoId: number;
}

