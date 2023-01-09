import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import Header from '../../components/header';
import sampleItems from './sampleItems.json';
import { Todo } from '../../../types/todo';
import classes from './presenter.module.scss';
import paths from '../../../config/paths';

const TodoListUI: FC = () => {
	return (
		<div className={classes.root}>
			<Header title="Todo一覧" path={paths.createTodo} buttonText="新規作成" />
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
