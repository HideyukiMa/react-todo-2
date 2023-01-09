import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';
import classes from './index.module.scss';

const ListItem: FC<Props> = ({ id, title, isDone }) => {
	return (
		<div className={classes.root}>
			<input
				type="checkbox"
				disabled
				defaultChecked={isDone}
				className={classes.input}
			/>
			<div className={classes.contents}>
				<Link to={`/todo/${id}`} className={classes.link}>
					{title}
				</Link>
				<div className={classes.buttons}>
					<Link to={`/edit-todo/${id}`}>
						<button className={classes.editButton}>編集</button>
					</Link>
					<button className={classes.deleteButton}>削除</button>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
