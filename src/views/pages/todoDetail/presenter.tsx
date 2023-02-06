import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';
import classes from './presenter.module.scss';
import { Props } from './types';

const TodoDetailUI: FC<Props> = ({
	register,
	handleSubmit,
	errors,
	onSubmit
}) => {
	return (
		<div className={classes.TodoDetail}>
			<div className={classes.header}>
				<div className={classes.headerTitle}>Todo詳細</div>
				<Link to={paths.todoList} className={classes.link}>
					<button className={classes.returnButton}>一覧に戻る</button>
				</Link>
			</div>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				{/* title */}
				<div className={classes.content}>
					<label className={classes.label}>タイトル</label>
					<input className={classes.inputValue} disabled />
				</div>
				{/* detail */}
				<div className={classes.details}>
					<label className={classes.label}>詳細</label>
					<textarea className={classes.textArea} disabled />
				</div>

				<div className={classes.radioArea}>
					<input className={classes.radioInput} type="radio" />
					<label className={classes.radioLabel}>完了</label>
					<input className={classes.radioInput} type="radio"/>
					<label className={classes.radioLabel}>未完了</label>
				</div>

				<div className={classes.buttonArea}>
					<Link to={`/edit-todo/`}>
						<button className={classes.editButton}>編集する</button>
					</Link>
					<button className={classes.deleteButton}>削除する</button>
				</div>
			</form>
		</div>
	);
};

export default TodoDetailUI;
