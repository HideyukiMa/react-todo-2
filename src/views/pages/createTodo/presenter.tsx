import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';
import classes from './presenter.module.scss';
import { Props } from './types';

const CreateTodoUI: FC<Props> = ({
	register,
	handleSubmit,
	errors,
	onSubmit
}) => {
	return (
		<div className={classes.createTodo}>
			<Header title="Todo作成" path={paths.todoList} buttonText="一覧に戻る" />
			<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
				<div className={`${classes.content} ${classes.input}`}>
					<label className={classes.label}>タイトル</label>
					<input
						{...register('title', { required: true })}
						className={classes.inputValue}
					/>
					{errors.title != null && (
						<span className={classes.error}>入力必須項目です。</span>
					)}
				</div>
				<div className={`${classes.content} ${classes.textarea}`}>
					<label className={classes.label}>詳細</label>
					<textarea
						{...register('details')}
						className={classes.textareaValue}
					/>
				</div>
				<div className={classes.buttonArea}>
					<button className={classes.button}>作成する</button>
				</div>
			</form>
		</div>
	);
};

export default CreateTodoUI;
