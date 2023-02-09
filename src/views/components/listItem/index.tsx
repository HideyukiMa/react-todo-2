import React, { FC } from 'react';
import { Props } from './types';
import ListItemUI from './presenter';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';


const ListItem: FC<Props> = ({ id, title,details, isDone }) => {
	//dispatchでtoggleDeleteModalを呼び出す
	const dispatch = useAppDispatch();
	//openModal関数の定義
	const openModal = (): void => {
		dispatch(toggleDeleteModal(true));}

	return (
		//Propsの値をListItemUIに渡す
		<ListItemUI
			id={id}
			title={title}
			details={details}
			isDone={isDone}
			openModal={openModal}
		/>
	);
};

export default ListItem;
