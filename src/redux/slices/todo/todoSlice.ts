import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	createTodoAPI,
	editTodoAPI,
	getTodoAPI,
	getTodoListAPI
} from './todoAPI';
import { initialState, initialTodoDetail } from './initialState';
import { RootState } from '../../store';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';
import { EditInputs } from '../../../views/pages/editTodo/types';

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

export const editTodoAsync = createAsyncThunk(
	'todo/editTodo',
	async (args: EditInputs) => {
		const response = await editTodoAPI(args);
		return response;
	}
);

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		clearTodoDetailState: (state) => {
			state.todoDetail = initialTodoDetail;
		}
	},
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
		builder.addCase(editTodoAsync.fulfilled, (state, action) => {
			state.todoDetail = action.payload;
			// state.todoListの中から指定したtodoを抜き出す
			const todo = state.todoList?.find((todo) => {
				return todo.id === action.payload?.id;
			});
			if (todo != null && action.payload != null) {
				// 抜き出したtodoを書き換える
				todo.title = action.payload.title;
				todo.details = action.payload.details;
				todo.isDone = action.payload.isDone;
			}
		});
	}
});

export const { clearTodoDetailState } = todoSlice.actions;

export const selectTodoList = (state: RootState): Todo[] | undefined =>
	state.todo.todoList;
export const selectTodoDetail = (state: RootState): Todo | undefined =>
	state.todo.todoDetail;

export default todoSlice.reducer;
