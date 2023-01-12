import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CreateTodoUI from './presenter';
import { CreateInputs } from './types';

const CreateTodo: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateInputs>();
	const onSubmit: SubmitHandler<CreateInputs> = (data): void => {
		console.log(data);
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
