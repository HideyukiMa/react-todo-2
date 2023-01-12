import React, { FC } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import TodoDetailUI from './presenter';
import sampleData from './sampleData.json';

const TodoDetail: FC = () => {
	const dispatch = useAppDispatch();
	const { id, title, details, isDone } = sampleData;
	const openModal = (): void => {
		dispatch(toggleDeleteModal(true));
	};
	return (
		<TodoDetailUI
			id={id}
			title={title}
			details={details}
			isDone={isDone}
			openModal={openModal}
		/>
	);
};

export default TodoDetail;
