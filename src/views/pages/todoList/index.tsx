import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	clearTodoDetailState,
	getTodoListAsync,
	selectTodoList
} from '../../../redux/slices/todo/todoSlice';
import TodoListUI from './presenter';

const TodoList: FC = () => {
	const dispatch = useAppDispatch();
	const todoList = useAppSelector(selectTodoList);
	useEffect(() => {
		const getTodoList = async (): Promise<void> => {
			dispatch(clearTodoDetailState());
			await dispatch(getTodoListAsync());
		};
		void getTodoList();
	}, []);

	return <TodoListUI todoList={todoList} />;
};

export default TodoList;
