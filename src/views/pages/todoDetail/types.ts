import {
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form';

export interface CreateInputs {
	title: string;
	details?: string;
}

export interface Props {
	register: UseFormRegister<CreateInputs>;
	handleSubmit: UseFormHandleSubmit<CreateInputs>;
	errors: Partial<
		FieldErrorsImpl<{
			title: string;
			details: string;
		}>
	>;
	onSubmit: SubmitHandler<CreateInputs>;
}
