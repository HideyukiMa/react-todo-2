import { TodoState } from "./types";

// initialTodoListを定義
export const initialTodoList = [];
// initialTodoDetailを定義
export const initialTodoDetail = {
	id: 0,
	title: "",
	details: "",
	isDone: false,
};

// initialStateの型を定義
// todoListの初期値を定義
// todoDetailの初期値を定義
export const initialState: TodoState = {
	todoList: initialTodoList,
	todoDetail: initialTodoDetail,
};
