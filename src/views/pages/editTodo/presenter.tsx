import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';
import classes from './presenter.module.scss';
import { Props } from './types';

const EditTodoUI: FC<Props> = ({
	id,
	title,
	details,
	isDone,
	register,
	handleSubmit,
	errors,
	onSubmit
}) => {
	return (
		<div className={classes.editTodo}>
			<Header title="Todo編集" path={paths.todoList} buttonText="一覧に戻る" />
			<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
				<div className={`${classes.content} ${classes.input}`}>
					<label className={classes.label}>タイトル</label>
					<input
						{...register('title', { required: true })}
						defaultValue={title}
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
						// @ts-expect-error
						defaultValue={details}
						className={classes.textareaValue}
					/>
				</div>
				<div className={classes.radio}>
					<input
						{...register('isDone')}
						id="true"
						type="radio"
						name="isDone"
						value="完了"
						defaultChecked={isDone}
					/>
					<label htmlFor="true">完了</label>
					<input
						{...register('isDone')}
						id="false"
						type="radio"
						name="isDone"
						value="未完了"
						defaultChecked={!isDone}
					/>
					<label htmlFor="false">未完了</label>
				</div>
				<div className={classes.buttonArea}>
					<button className={classes.button}>編集する</button>
				</div>
			</form>
		</div>
	);
};

export default EditTodoUI;
