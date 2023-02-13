import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import EditTodoUI from './presenter';
import { EditInputs } from './types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	editTodoAsync,
	getTodoAsync,
	selectTodoDetail
} from '../../../redux/slices/todo/todoSlice';
import { useParams } from 'react-router-dom';

const EditTodo: FC = () => {
	// useParamsを使って、URLパラメータを取得
	const { todoId } = useParams();
	// useAppDispathを使って、dispatchを取得
	const dispatch = useAppDispatch();
	// useAppSelectorを使って、todoの詳細を取得
	// ここで、todoの詳細を取得することで、編集画面で初期値を設定することができる

	const todo = useAppSelector(selectTodoDetail);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditInputs>();

	// onSubmitの型をSubmitHandler<EditInputs>にすることで、dataの型をEditInputsにすることができる
	const onSubmit: SubmitHandler<EditInputs> = async (data): Promise<void> => {
		// editTodoAsyncをdispatchすることで、非同期処理を実行
		// URLパラメータをNumber型に変換して、引数に渡す
		// また、dataの型をEditInputsにしているので、data.titleなどで値を取得できる
		// ここで、data.titleなどを使って、Todoの編集を行う

		const args = {
			todoId: Number(todoId),
			title: data.title,
			details: data.details,
			isDone: data.isDone
		};

		await dispatch(editTodoAsync(args));
		alert('Todoの編集に成功しました。');
	};
	// useEffectを使って、コンポーネントがマウントされた時に、非同期処理を実行
	// ここで、非同期処理を実行することで、Todoの詳細を取得することができる
	// また、URLパラメータをNumber型に変換して、引数に渡す
	// ここで、URLパラメータをNumber型に変換して、引数に渡すことで、Todoの詳細を取得することができる
	// また、useEffectの第二引数に、todoIdを渡すことで、URLパラメータが変更された時に、非同期処理を実行することができる
	// ここで、URLパラメータが変更された時に、非同期処理を実行することで、Todoの詳細を取得することができる
	// ここで、Todoの詳細を取得することで、編集画面で初期値を設定することができる
	useEffect(() => {
		const getTodo = async (): Promise<void> => {
			await dispatch(getTodoAsync(Number(todoId)));
		};
		void getTodo();
	}, [todoId]);

	// todoが存在する場合は、編集画面を表示
	// ここで、todoが存在する場合は、編集画面を表示することで、編集画面で初期値を設定することができる
	// また、todoが存在しない場合は、Loading...を表示
	// ここで、todoが存在しない場合は、Loading...を表示することで、編集画面で初期値を設定することができる
	// ここで、編集画面で初期値を設定することで、Todoの編集を行うことができる
	// ここで、Todoの編集を行うことで、Todoの編集に成功することができる
	
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
