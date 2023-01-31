import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/paths';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	selectDeleteModalIsOpen,
	toggleDeleteModal
} from '../../../redux/slices/modal/modalSlice';
import {
	deleteTodoAsync,
	selectFocusTodoId
} from '../../../redux/slices/todo/todoSlice';
import DeleteModalUI from './presenter';

const DeleteModal: FC = () => {
	const navigate = useNavigate();
	const deleteModalIsOpen: boolean = useAppSelector(selectDeleteModalIsOpen);
	const focusTodoId: number = useAppSelector(selectFocusTodoId);
	const dispatch = useAppDispatch();
	const closeModal = (): void => {
		dispatch(toggleDeleteModal(false));
	};
	const deleteTodo = async (): Promise<void> => {
		const args = { todoId: focusTodoId };
		await dispatch(deleteTodoAsync(args));
		dispatch(toggleDeleteModal(false));
		alert('Todoを削除しました。');
		navigate(paths.todoList);
	};
	return (
		<DeleteModalUI
			modalIsOpen={deleteModalIsOpen}
			closeModal={closeModal}
			deleteTodo={deleteTodo}
		/>
	);
};

export default DeleteModal;
