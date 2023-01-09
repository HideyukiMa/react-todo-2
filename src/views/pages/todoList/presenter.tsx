import React, { FC } from 'react';
import Title from '../../components/title';
import ListItem from '../../components/listItem';
import sampleItems from './sampleItems.json';
import { Todo } from '../../../types/todo';

const TodoListUI: FC = () => {
	return (
		<div>
			<Title title={'TODO一覧'} />
			<div>
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
