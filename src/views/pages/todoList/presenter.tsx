import React, { FC } from 'react';
import Title from '../../components/title';
import ListItem from '../../components/listItem';
import sampleItems from './sampleItems.json';
import { Todo } from '../../../types/todo';
import classes from './presenter.module.scss';

const TodoListUI: FC = () => {
	return (
		<div className={classes.root}>
			<Title title={'TODO一覧'} />
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
