import { TodoState } from './types';

export const initialTodoList = [];
export const initialTodoDetail = {
	id: 0,
	title: '',
	details: '',
	isDone: false
};
export const initialFocusTodoId = 0;

export const initialState: TodoState = {
	todoList: initialTodoList,
	todoDetail: initialTodoDetail,
	focusTodoId: initialFocusTodoId
};
