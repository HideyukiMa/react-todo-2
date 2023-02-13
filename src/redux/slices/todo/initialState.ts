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

export const initialFoucusTodoId = 0;

// initialStateを定義
// initialStateの型を定義
// todoListの初期値を定義
// todoDetailの初期値を定義
// focusTodoIdの初期値を定義

export const initialState: TodoState = {
	todoList: initialTodoList,
	todoDetail: initialTodoDetail,
	focusTodoId: initialFoucusTodoId,
};
