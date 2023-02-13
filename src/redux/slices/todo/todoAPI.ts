import axios from 'axios';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';

// axios.createでbaseURLを設定しているので、
// baseURLを除いたパスを指定する
// todoApiを定義
const todoApi = axios.create({
	baseURL: 'http://localhost:8080/todo'
});

// createTodoAPIを定義
// 返り値はPromise型で、Todo型を返す
// undefinedを返すこともある
// CreateInput型の引数をargsとして受け取る
export const createTodoAPI = async (
	args: CreateInputs
): Promise<Todo | undefined> => {
	try {
		// tilte detailsを分割代入
		// axiosでPOSTリクエストを送信
		// todoApi.post('/', { title, details });
		// resにはTodo型のデータが入っている
		const res = await todoApi.post('/', args);
		const todo: Todo = res.data;
		return todo;
	} catch (error) {
		console.log(error);
		alert('エラーが発生しました');
	}
};

// getTodoListAPIを定義
// 返り値はPromise型で、Todo型の配列を返す
// undefinedを返すこともある
export const getTodoListAPI = async (): Promise<Todo[] | undefined> => {
	try {
		// axiosでGETリクエストを送信
		// todoApi.get('/list');
		const res = await todoApi.get('/list');

		// TodoListを返す
		const todoList: Todo[] = res.data;
		return todoList;
	} catch (error) {
		console.log(error);
		alert('エラーが発生しました');
	}
};

// getTodoAPIを定義
// 返り値はPromise型で、Todo型の配列を返す
// undefinedを返すこともある
export const getTodoAPI = async (todoId: number): Promise<Todo | undefined> => {
	try {
		// axiosでGETリクエストを送信
		const res = await todoApi.get(`/${todoId}`);

		// Todoを返す
		const todo: Todo = res.data;
		return todo;
	} catch (error) {
		console.log(error);
		alert('エラーが発生しました');
	}
};
