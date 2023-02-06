import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import EditTodoUI from './presenter';
import { EditInputs } from './types';
import sampledata from './sampleData.json'


const EditTodo: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditInputs>();
	const onSubmit: SubmitHandler<EditInputs> = (data): void => {
		console.log(data);
	};
	return (
		<EditTodoUI
		todo={sampledata}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	);
};

export default EditTodo;