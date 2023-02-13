import React, { FC, useEffect } from 'react';
import TodoDetailUI from './presenter';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import {
	getTodoAsync,
	selectTodoDetail,
	setFocusTodoId
} from '../../../redux/slices/todo/todoSlice';
import { useParams } from 'react-router-dom';

const TodoDetail: FC = () => {
	// dispatchでtoggleDeleteModalを呼び出す
	const dispatch = useAppDispatch();
	// todoをuseAppSelectorでselectTodoDetailから取得
	const todo = useAppSelector(selectTodoDetail);

	// todoIdをuseParamsで取得
	const { todoId } = useParams<{ todoId: string }>();

	// openModal関数の定義
	const openModal = (): void => {
		dispatch(toggleDeleteModal(true));
		dispatch(setFocusTodoId(Number(todoId)));
	};

	// useEffectで初回レンダリング時にgetTodoAsyncをdispatch
	// dispatchの戻り値はPromiseなのでasync/awaitで処理
	// dispatchの戻り値はPromiseなのでvoidで型を明示
	// Number(todoId)で文字列を数値に変換
	useEffect(() => {
		const getTodo = async (): Promise<void> => {
			await dispatch(getTodoAsync(Number(todoId)));
		};
		void getTodo();
	}, []);

	// Propsの値をTodoDetailUIに渡す
	return (
		// Propsの値をTodoDetailUIに渡す
		// sampledataはsampleData.jsonから読み込んだデータ

		<TodoDetailUI todo={todo} openModal={openModal} />
	);
};

export default TodoDetail;
