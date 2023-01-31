import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodoAPI, getTodoListAPI } from './todoAPI';
import { initialState } from './initialState';
import { RootState } from '../../store';
import { Todo } from '../../../types/todo';

export const getTodoListAsync = createAsyncThunk(
	'post/getTodoList',
	async () => {
		const response = await getTodoListAPI();
		return response;
	}
);

export const getTodoAsync = createAsyncThunk(
	'post/getTodo',
	async (todoId: number) => {
		const response = await getTodoAPI(todoId);
		return response;
	}
);

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTodoListAsync.fulfilled, (state, action) => {
			state.todoList = action.payload;
		});
		builder.addCase(getTodoAsync.fulfilled, (state, action) => {
			state.todoDetail = action.payload;
		});
	}
});

export const selectTodoList = (state: RootState): Todo[] | undefined =>
	state.todo.todoList;
export const selectTodoDetail = (state: RootState): Todo | undefined =>
	state.todo.todoDetail;

export default todoSlice.reducer;
