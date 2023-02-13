import React, { FC, useEffect } from 'react';
import { clearTodoDetail, getTodoListAsync, selectTodoList } from '../../../redux/slices/todo/todoSlice';
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
			// getTodoListAsyncの処理が終わったら、Todo詳細のstateを初期化
			// これをしないと、Todo詳細ページでTodoを削除した後に、Todo一覧ページに遷移したときに、
			// 削除したTodoの詳細が表示されてしまう
			dispatch(clearTodoDetail());
		};
		void getTodoList();
	},[]);

	return <TodoListUI todoList={todoList} />;
};

export default TodoList;
