import React, { FC } from 'react';
import TodoDetailUI from './presenter';
import sampleData from './sampleData.json';

const TodoDetail: FC = () => {
	const { id, title, details, isDone } = sampleData;
	return (
		<TodoDetailUI id={id} title={title} details={details} isDone={isDone} />
	);
};

export default TodoDetail;
