import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTodoAPI, getTodoAPI, getTodoListAPI } from './todoAPI';
import { initialState } from './initialState';
import { RootState } from '../../store';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';

export const createTodoAsync = createAsyncThunk(
	'todo/createTodo',
	async (args: CreateInputs) => {
		const response = await createTodoAPI(args);
		return response;
	}
);

export const getTodoListAsync = createAsyncThunk(
	'todo/getTodoList',
	async () => {
		const response = await getTodoListAPI();
		return response;
	}
);

export const getTodoAsync = createAsyncThunk(
	'todo/getTodo',
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
		builder.addCase(createTodoAsync.fulfilled, (state, action) => {
			if (state.todoList !== undefined && action.payload !== undefined) {
				state.todoList = [...state.todoList, action.payload];
			}
		});
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
