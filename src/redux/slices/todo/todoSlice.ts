import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { initialState } from './initialState';
import { createTodoAPI, getTodoAPI, getTodoListAPI } from './todoAPI';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';

// createTodoAsyncをcreateAsyncThunkで定義
// argsを引数にとり、createTodoAPIを呼び出し、非同期処理の結果を返す
export const createTodoAsync = createAsyncThunk(
	'todo/createTodo',
	async (args: CreateInputs) => {
		const response = await createTodoAPI(args);
		return response;
	}
);



// getTodoListAsyncをcreateAsyncThunkで定義
// getTodoListAPIを呼び出し、非同期処理の結果を返す
export const getTodoListAsync = createAsyncThunk(
	'todo/getTodoList',
	async () => {
		const response = await getTodoListAPI();
		return response;
	}
);

// getTodoAsyncをcreateAsyncThunkで定義
// getTodoAPIを呼び出し、非同期処理の結果を返す
export const getTodoAsync = createAsyncThunk(
	'todo/getTodo',
	async (todoId: number) => {
		const response = await getTodoAPI(todoId);
		return response;
	}
);



// todoSliceという名前のsliceを作成
export const todoSlice = createSlice({
	// sliceの名前
	name: 'todo',
	// initialStateの値を定義
	initialState,
	// reducerの定義
	reducers: {},
	// extraReducersの定義
	// builder.addCaseで非同期処理の状態を定義
	// action.payloadで非同期処理の結果を取得
	// if (action.payload)で非同期処理の結果があるかどうかを判定
	// undefinedの場合は何もしない
	// undefinedでない場合はstateの値を更新
	// state.todoList = action.payload;
	extraReducers: (builder) => {
		// createTodoAsyncの状態を定義	
		builder.addCase(createTodoAsync.fulfilled, (state, action) => {
			// action.payloadがundefinedでない場合
			// state.todoListがundefinedでない場合
			if (state.todoList !== undefined && action.payload !== undefined) {
				// state.todoListの値を更新
				// state.todoList = [...state.todoList, action.payload];
				state.todoList=[...state.todoList, action.payload];
			}
		});

		builder.addCase(getTodoListAsync.fulfilled, (state, action) => {
			if (action.payload !== undefined) {
				state.todoList = action.payload;
			}
		});
		builder.addCase(getTodoAsync.fulfilled, (state, action) => {
			if (action.payload !== undefined) {
				state.todoDetail = action.payload;
			}
		}
		);
	}
	
});

// selectTodoListを定義
// RootStateを引数にとり、Todo型の配列を返す
// undefinedを返すこともある
export const selectTodoList = (state: RootState): Todo[] | undefined=> 
	state.todo.todoList;

// selectTodoDetailを定義
// RootStateを引数にとり、Todo型を返す
// undefinedを返すこともある
export const selectTodoDetail = (state: RootState): Todo | undefined =>
	state.todo.todoDetail;

// todoSliceのreducerをexport
export default todoSlice.reducer;
