import React, { FC, useState } from 'react';
import DeleteModalUI from './presenter';

//reduxを使用するための記述
//useAppDispatchはdispatchを使用するための記述
import { useAppDispatch } from '../../../redux/hooks';
import { useAppSelector } from '../../../redux/hooks';
import {
	selectDeleteModalIsOpen,
	toggleDeleteModal
} from '../../../redux/slices/modal/modalSlice';

//DeleteModalコンポーネントの定義
//FCはReactの関数コンポーネントの型定義
//deleteModalIsOpenはboolean型
//useAppSelectorでselectDeleteModalIsOpenを呼び出す
const DeleteModal: FC = () => {
	const deleteModalIsOpen:boolean = useAppSelector(selectDeleteModalIsOpen);

	const dispatch = useAppDispatch();

	//closeModal関数の定義
	//dispatchでtoggleDeleteModalを呼び出す
	const closeModal = (): void => {
		dispatch(toggleDeleteModal(false));
	};
	//dispatchでtoggleDeleteModalを呼び出す
	const deleteTodo = (): void => {
		dispatch(toggleDeleteModal(false));
		alert('削除しました。');
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
