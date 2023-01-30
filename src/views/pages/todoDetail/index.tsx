import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import {
	getTodoAsync,
	selectTodoDetail
} from '../../../redux/slices/todo/todoSlice';
import TodoDetailUI from './presenter';

const TodoDetail: FC = () => {
	const dispatch = useAppDispatch();
	const todo = useAppSelector(selectTodoDetail);
	const openModal = (): void => {
		dispatch(toggleDeleteModal(true));
	};
	const { todoId } = useParams();

	useEffect(() => {
		const getTodo = async (): Promise<void> => {
			try {
				await dispatch(getTodoAsync(Number(todoId)));
			} catch (error) {
				alert('Todoの取得に失敗しました');
			}
		};
		void getTodo();
	}, [todoId]);

	return <TodoDetailUI todo={todo} openModal={openModal} />;
};

export default TodoDetail;
