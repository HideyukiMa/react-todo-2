import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { initialState } from './initialState';
import { getTodoListAPI } from './todoAPI';
import { Todo } from '../../../types/todo';

// getTodoListAsyncをcreateAsyncThunkで定義
export const getTodoListAsync = createAsyncThunk(
	'todo/getTodoList',
	async () => {
		// getTodoListAPIを呼び出し、responseを返す
		const response = await getTodoListAPI();
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
		builder.addCase(getTodoListAsync.fulfilled, (state, action) => {
			if (action.payload !== undefined) {
				state.todoList = action.payload;
			}
		});
	}
	
});

// selectTodoListを定義
// RootStateを引数にとり、Todo型の配列を返す
// undefinedを返すこともある
export const selectTodoList = (state: RootState): Todo[] | undefined=> 
	state.todo.todoList;

// todoSliceのreducerをexport
export default todoSlice.reducer;
