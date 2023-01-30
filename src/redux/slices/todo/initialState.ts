import { TodoState } from './types';

export const initialTodoList = [];
export const initialTodoDetail = {
	id: 0,
	title: '',
	details: '',
	isDone: false
};

export const initialState: TodoState = {
	todoList: initialTodoList,
	todoDetail: initialTodoDetail
};
