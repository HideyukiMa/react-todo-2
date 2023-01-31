import { Todo } from '../../../types/todo';
import {
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form';

export interface Props {
	todo: Todo | undefined;
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
	todoId?: number;
	title: string;
	details?: string;
	isDone: string;
}
