import React, { FC, useEffect } from 'react';
import { getTodoListAsync, selectTodoList } from '../../../redux/slices/todo/todoSlice';
import TodoListUI from './presenter';
// useAppDispatch, useAppSelectorをimport
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const TodoList: FC = () => {

	// dispatchをuseAppDispatchで取得
	const dispatch = useAppDispatch();
	
	// stateをuseAppSelectorでselectTodoListから取得
	const todoList = useAppSelector(selectTodoList);


	// useEffectで初回レンダリング時にgetTodoListAsyncをdispatch
	// dispatchの戻り値はPromiseなのでasync/awaitで処理
	// dispatchの戻り値はPromiseなのでvoidで型を明示
	useEffect(() => {
		const getTodoList = async ():Promise<void> => {
			await dispatch(getTodoListAsync());
		};
		void getTodoList();
	},[]);

	return <TodoListUI todoList={todoList} />;
};

export default TodoList;
