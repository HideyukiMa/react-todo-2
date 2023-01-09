import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';
import classes from './presenter.module.scss';

const CreateTodoUI: FC = () => {
	return (
		<div className={classes.createTodo}>
			<Header title="Todo作成" path={paths.todoList} buttonText="一覧に戻る" />
			<form className={classes.form}>
				<div className={`${classes.content} ${classes.input}`}>
					<label className={classes.label}>タイトル</label>
					<input className={classes.inputValue} />
				</div>
				<div className={`${classes.content} ${classes.textarea}`}>
					<label className={classes.label}>詳細</label>
					<textarea className={classes.textareaValue} />
				</div>
				<div className={classes.buttonArea}>
					<button className={classes.button}>作成する</button>
				</div>
			</form>
		</div>
	);
};

export default CreateTodoUI;
