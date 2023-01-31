import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/paths';
import { useAppDispatch } from '../../../redux/hooks';
import { createTodoAsync } from '../../../redux/slices/todo/todoSlice';
import CreateTodoUI from './presenter';
import { CreateInputs } from './types';

const CreateTodo: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateInputs>();
	const onSubmit: SubmitHandler<CreateInputs> = async (data): Promise<void> => {
		try {
			await dispatch(createTodoAsync(data));
			navigate(paths.todoList);
		} catch (error) {
			alert('Todoの投稿に失敗しました。');
		}
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
