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
			try {
				dispatch(clearTodoDetailState());
				await dispatch(getTodoListAsync());
			} catch (error) {
				alert('Todo一覧の取得に失敗しました');
			}
		};
		void getTodoList();
	}, []);

	return <TodoListUI todoList={todoList} />;
};

export default TodoList;
