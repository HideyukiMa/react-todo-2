import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';
import DeleteModal from '../../components/deleteModal';
import Header from '../../components/header';
import classes from './presenter.module.scss';
import { Props } from './types';

const TodoDetailUI: FC<Props> = ({ id, title, details, isDone, openModal }) => {
	return (
		<div className={classes.todoDetail}>
			<Header title="Todo詳細" path={paths.todoList} buttonText="一覧に戻る" />
			<div className={classes.contents}>
				<div className={`${classes.content} ${classes.input}`}>
					<label className={classes.label}>タイトル</label>
					<input className={classes.inputValue} value={title} disabled />
				</div>
				<div className={`${classes.content} ${classes.textarea}`}>
					<label className={classes.label}>詳細</label>

					<textarea
						className={classes.textareaValue}
						// @ts-expect-error
						value={details}
						disabled
					/>
				</div>
				<div className={classes.radio}>
					<input
						id="true"
						type="radio"
						name="isDone"
						value={1}
						checked={isDone}
						disabled
						className={classes.radioInput}
					/>
					<label htmlFor="true" className={classes.radioLabel}>
						完了
					</label>
					<input
						id="false"
						type="radio"
						name="isDone"
						value={0}
						checked={!isDone}
						disabled
						className={classes.radioInput}
					/>
					<label htmlFor="false" className={classes.radioLabel}>
						未完了
					</label>
				</div>
				<div className={classes.buttonArea}>
					<Link to={`/edit-todo/${id}`}>
						<button className={`${classes.button} ${classes.edit}`}>
							編集する
						</button>
					</Link>

					<button
						onClick={openModal}
						className={`${classes.button} ${classes.delete}`}
					>
						削除する
					</button>
				</div>
			</div>
			<DeleteModal />
		</div>
	);
};

export default TodoDetailUI;