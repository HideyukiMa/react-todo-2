import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import EditTodoUI from './presenter';
import sampleData from './sampleData.json';
import { EditInputs } from './types';

const EditTodo: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditInputs>();
	const onSubmit: SubmitHandler<EditInputs> = (data): void => {
		console.log(data);
	};
	const { id, title, details, isDone } = sampleData;
	return (
		<EditTodoUI
			id={id}
			title={title}
			details={details}
			isDone={isDone}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	);
};

export default EditTodo;
