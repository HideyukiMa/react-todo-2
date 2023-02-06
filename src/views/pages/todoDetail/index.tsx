import React, { FC } from 'react';
import TodoDetailUI from './presenter';
import sampledata from './sampleData.json'

const TodoDetail: FC = () => {

	return (
		<TodoDetailUI todo = {sampledata}
		/>
	);
};

export default TodoDetail;
