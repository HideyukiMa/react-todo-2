import React, { FC } from 'react';
import EditTodoUI from './presenter';
import sampleData from './sampleData.json';

const EditTodo: FC = () => {
	const { id, title, details, isDone } = sampleData;
	return <EditTodoUI id={id} title={title} details={details} isDone={isDone} />;
};

export default EditTodo;
