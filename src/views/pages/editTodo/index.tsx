import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	editTodoAsync,
	getTodoAsync,
	selectTodoDetail
} from '../../../redux/slices/todo/todoSlice';
import EditTodoUI from './presenter';
import { EditInputs } from './types';

const EditTodo: FC = () => {
	const dispatch = useAppDispatch();
	const todo = useAppSelector(selectTodoDetail);
	const { todoId } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditInputs>();
	const onSubmit: SubmitHandler<EditInputs> = async (data): Promise<void> => {
		try {
			const args = {
				todoId: Number(todoId),
				title: data.title,
				details: data.details,
				isDone: data.isDone
			};
			await dispatch(editTodoAsync(args));
			alert('Todoの編集に成功しました。');
		} catch (error) {
			alert('Todoの編集に失敗しました。');
		}
	};

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

	return todo?.id !== 0 ? (
		<EditTodoUI
			todo={todo}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	) : (
		<div>Loading...</div>
	);
};

export default EditTodo;
