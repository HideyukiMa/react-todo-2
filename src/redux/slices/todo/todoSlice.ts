import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodoListAPI } from './todoAPI';
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

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTodoListAsync.fulfilled, (state, action) => {
			state.todoList = action.payload;
		});
	}
});

export const selectTodoList = (state: RootState): Todo[] | undefined =>
	state.todo.todoList;

export default todoSlice.reducer;
