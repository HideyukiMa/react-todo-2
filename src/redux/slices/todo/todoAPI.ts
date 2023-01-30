import axios from 'axios';
import { Todo } from '../../../types/todo';

export const todoApi = axios.create({
	baseURL: 'http://localhost:8080/todo'
});

export const getTodoListAPI = async (): Promise<Todo[] | undefined> => {
	try {
		const response = await todoApi.get('/list');
		const todoList: Todo[] = response.data;
		return todoList;
	} catch (error) {
		console.error(error);
	}
};

export const getTodoAPI = async (id: number): Promise<Todo | undefined> => {
	try {
		const response = await todoApi.get('/', {
			params: {
				todoId: id
			}
		});
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
	}
};
