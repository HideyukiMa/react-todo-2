import React, { FC } from 'react';
import Title from '../../components/title';

const CreateTodoUI: FC = () => {
	return (
		<div>
			<Title title={'TODO新規作成'} />
			TodoListUI
		</div>
	);
};

export default CreateTodoUI;
