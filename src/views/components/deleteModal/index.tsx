import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	selectDeleteModalIsOpen,
	toggleDeleteModal
} from '../../../redux/slices/modal/modalSlice';
import DeleteModalUI from './presenter';

const DeleteModal: FC = () => {
	const deleteModalIsOpen: boolean = useAppSelector(selectDeleteModalIsOpen);
	const dispatch = useAppDispatch();
	const closeModal = (): void => {
		dispatch(toggleDeleteModal(false));
	};
	const deleteTodo = (): void => {
		dispatch(toggleDeleteModal(false));
		alert('Todoを削除しました。');
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
