import React, { FC } from 'react';
import DeleteModalUI from './presenter';

// reduxを使用するための記述
// useAppDispatchはdispatchを使用するための記述
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	selectDeleteModalIsOpen,
	toggleDeleteModal
} from '../../../redux/slices/modal/modalSlice';
import {
	deleteTodoAsync,
	selectFocusTodoId
} from '../../../redux/slices/todo/todoSlice';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/paths';

// DeleteModalコンポーネントの定義
// FCはReactの関数コンポーネントの型定義
// deleteModalIsOpenはboolean型
// useAppSelectorでselectDeleteModalIsOpenを呼び出す
const DeleteModal: FC = () => {
	const navigate = useNavigate();
	const deleteModalIsOpen: boolean = useAppSelector(selectDeleteModalIsOpen);
	const focusTodoId: number = useAppSelector(selectFocusTodoId);
	const dispatch = useAppDispatch();

	// closeModal関数の定義
	// dispatchでtoggleDeleteModalを呼び出す
	// voidで型を明示
	const closeModal = (): void => {
		dispatch(toggleDeleteModal(false));
	};
	// deleteTodo関数の定義
	// dispatchでdeleteTodoAsyncを呼び出す
	// voidで型を明示
	// alertでTodoを削除しましたと表示
	// navigateでTodo一覧ページに遷移
	
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
