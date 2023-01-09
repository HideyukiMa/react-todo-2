import React, { FC } from 'react';
import Title from '../../components/title';
import ListItem from '../../components/listItem';
import sampleItems from './sampleItems.json';
import { Todo } from '../../../types/todo';
import classes from './presenter.module.scss';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';

const TodoListUI: FC = () => {
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Title title={'TODO一覧'} />
				<Link to={paths.createTodo} className={classes.link}>
					<button className={classes.button}>新規作成</button>
				</Link>
			</div>

			<div className={classes.list}>
				{sampleItems.map((item: Todo) => {
					return (
						<ListItem
							key={item.id}
							id={item.id}
							title={item.title}
							details={item.details}
							isDone={item.isDone}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TodoListUI;
