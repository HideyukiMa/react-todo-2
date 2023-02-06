import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TodoDetailUI from './presenter';
import { CreateInputs } from './types';

const TodoDetail: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateInputs>();
	const onSubmit: SubmitHandler<CreateInputs> = (data): void => {
		console.log(data);
	};
	return (
		<TodoDetailUI
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	);
};

export default TodoDetail;
