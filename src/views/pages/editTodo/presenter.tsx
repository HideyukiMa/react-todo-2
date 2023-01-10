import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';
import classes from './presenter.module.scss';
import { Props } from './types';

const EditTodoUI: FC<Props> = ({ id, title, details, isDone }) => {
	console.log(isDone);

	return (
		<div className={classes.editTodo}>
			<Header title="Todo編集" path={paths.todoList} buttonText="一覧に戻る" />
			<form className={classes.form}>
				<div className={`${classes.content} ${classes.input}`}>
					<label className={classes.label}>タイトル</label>
					<input className={classes.inputValue} value={title} />
				</div>
				<div className={`${classes.content} ${classes.textarea}`}>
					<label className={classes.label}>詳細</label>
					{/* @ts-expect-error */}
					<textarea className={classes.textareaValue} value={details} />
				</div>
				<div className={classes.radio}>
					<input
						id="true"
						type="radio"
						name="isDone"
						value={1}
						checked={isDone}
					/>
					<label htmlFor="true">完了</label>
					<input
						id="false"
						type="radio"
						name="isDone"
						value={0}
						checked={!isDone}
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
