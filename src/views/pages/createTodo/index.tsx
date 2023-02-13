import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/paths';
import { useAppDispatch } from '../../../redux/hooks';
import { createTodoAsync } from '../../../redux/slices/todo/todoSlice';
import CreateTodoUI from './presenter';
import { CreateInputs } from './types';

const CreateTodo: FC = () => {
	// useAppDispathを使って、dispatchを取得
	const dispatch = useAppDispatch();
	// useNavigateを使って、navigateを取得
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateInputs>();

	// onSubmitの型をSubmitHandler<CreateInputs>にすることで、dataの型をCreateInputsにすることができる
	const onSubmit: SubmitHandler<CreateInputs> = async (data): Promise<void> => {
		// createTodoAsyncをdispatchすることで、非同期処理を実行
		await dispatch(createTodoAsync(data));
		// 作成に成功したら、Todo一覧ページに遷移
		alert('Todoの作成に成功しました。');
		navigate(paths.todoList);
	};
	return (
		<CreateTodoUI
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	);
};

export default CreateTodo;
