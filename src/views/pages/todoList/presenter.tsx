import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import Header from '../../components/header';
import { Todo } from '../../../types/todo';
import classes from './presenter.module.scss';
import paths from '../../../config/paths';
import { Props } from './types';
import sampledata from './sampleData.json'
import DeleteModal from '../../components/deleteModal';


const TodoListUI: FC = () => {
	return (
		<div className={classes.todoList}>
			<Header title="Todo一覧" path={paths.createTodo} buttonText="新規作成" />
			<div className={classes.list}>
				{sampledata.map((item) => {
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
			<DeleteModal/>

		</div>
	);
};

export default TodoListUI;
