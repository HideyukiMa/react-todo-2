import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import {
	getTodoAsync,
	selectTodoDetail,
	setFocusTodoId
} from '../../../redux/slices/todo/todoSlice';
import TodoDetailUI from './presenter';

const TodoDetail: FC = () => {
	const dispatch = useAppDispatch();
	const todo = useAppSelector(selectTodoDetail);
	const { todoId } = useParams();
	const openModal = (): void => {
		dispatch(setFocusTodoId(todoId));
		dispatch(toggleDeleteModal(true));
	};

	useEffect(() => {
		const getTodo = async (): Promise<void> => {
			await dispatch(getTodoAsync(Number(todoId)));
		};
		void getTodo();
	}, [todoId]);

	return <TodoDetailUI todo={todo} openModal={openModal} />;
};

export default TodoDetail;
