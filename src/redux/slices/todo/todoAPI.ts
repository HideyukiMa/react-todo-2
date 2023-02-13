import axios from 'axios';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';
import { EditInputs } from '../../../views/pages/editTodo/types';

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

// editTodoAPIを定義
// 返り値はPromise型で、Todo型を返す
// undefinedを返すこともある
// EditInputs型の引数をargsとして受け取る
export const editTodoAPI = async (
	args: EditInputs
): Promise<Todo | undefined> => {
	try {
		// axiosでPUTリクエストを送信
		const { todoId, title, details, isDone } = args;
		// isDoneはstring型なのでboolean型に変換
		const convertedIsDone: boolean = isDone === '完了';
		// axiosでPUTリクエストを送信
		const res = await todoApi.patch('/', {
			todoId,
			title,
			details,
			isDone: convertedIsDone
		});
		// Todoを返す
		const todo: Todo = res.data;
		return todo;
	} catch (error) {
		console.log(error);
		alert('エラーが発生しました');
	}
};

// deleteTodoAPIを定義
// 返り値はPromise型で、Todo型を返す
// undefinedを返すこともある
// DeleteTodoArgs型の引数をargsとして受け取る

export const deleteTodoAPI = async (args: {
	todoId: number;
}): Promise<Todo | undefined> => {
	try {
		const { todoId } = args;
		const response = await todoApi.delete('/', {
			data: { todoId }
		});
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
		alert('Todoの削除に失敗しました。');
	}
};
