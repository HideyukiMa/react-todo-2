import { Todo } from '../../../types/todo';
import {
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form';

export interface Props extends Todo {
	register: UseFormRegister<EditInputs>;
	handleSubmit: UseFormHandleSubmit<EditInputs>;
	errors: Partial<
		FieldErrorsImpl<{
			title: string;
			details: string;
		}>
	>;
	onSubmit: SubmitHandler<EditInputs>;
}

export interface EditInputs {
	title: string;
	details?: string;
	isDone: boolean;
}
