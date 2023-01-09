import React, { FC } from 'react';
import Title from '../../components/title';

const TodoDetailUI: FC = () => {
	return (
		<div>
			<Title title={'TODO詳細'} />
			TodoListUI
		</div>
	);
};

export default TodoDetailUI;
