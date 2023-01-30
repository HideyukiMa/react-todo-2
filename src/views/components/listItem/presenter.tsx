import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';
import classes from './presenter.module.scss';

const ListItemUI: FC<Props> = ({ id, title, isDone, openModal }) => {
	return (
		<div className={classes.listItem}>
			<input
				type="checkbox"
				disabled
				defaultChecked={isDone}
				className={classes.input}
			/>
			<div className={classes.contents}>
				<Link to={`todo/${id}`} className={classes.link}>
					{title}
				</Link>
				<div className={classes.buttons}>
					<Link to={`/edit-todo/${id}`}>
						<button className={classes.editButton}>編集</button>
					</Link>
					<button onClick={openModal} className={classes.deleteButton}>
						削除
					</button>
				</div>
			</div>
		</div>
	);
};

export default ListItemUI;
