import React, { FC } from 'react';
import { Props } from './types';
import classes from './presenter.module.scss';
import Header from '../../components/header';
import paths from '../../../config/paths';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/deleteModal';

const todoDetialUI: FC<Props> = ({ todo, openModal }) => {
	return (
		//
		<div className={classes.todoDetial}>
			<Header title="Todo詳細" path={paths.todoList} buttonText="一覧に戻る" />
			<div className={classes.contents}>
				<div className={classes.input}>
					<label className={classes.label}>タイトル</label>
					<input
						value={todo?.title}
						disabled
						className={classes.inputValue}
					></input>
				</div>
				<div className={classes.textArea}>
					<label className={classes.label}>詳細</label>
					<textarea
						value={todo?.details !=null ? todo?.details : ''}
						disabled
						className={classes.inputValue}
					></textarea>
				</div>
				<div className={classes.radio}>
					<input
						id="true"
						type="radio"
						name="isDone"
						value="完了"
						checked={todo?.isDone }
						className={classes.radioInput}
						disabled
					/>
					<label htmlFor="true" className={classes.radioLabel}>
						完了
					</label>

					<input
						id="false"
						type="radio"
						name="isDone"
						value="未完了"
						checked={!todo?.isDone}
						className={classes.radioInput}
						disabled
					/>
					<label htmlFor="false" className={classes.radioLabel}>
						未完了
					</label>
				</div>

				<div className={classes.buttonArea}>
				{/* eslint-diable-next-line @typescript-eslint/restrict-template-expressions */}
					<Link to={`/edit-todo/${todo?.id}`}>
						<button className={classes.editButton}>編集する</button>
					</Link>
					<button onClick={openModal} 
					className={classes.deleteButton}>削除する</button>
				</div>
			</div>
			{/* //削除モーダルの呼び出し */}
			<DeleteModal />
		</div>
		
	);
};

export default todoDetialUI;
