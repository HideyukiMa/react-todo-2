import { Todo } from "../../../types/todo";

// initialStateの型を定義
export interface TodoState {
	todoList: Todo[] | undefined;
}
