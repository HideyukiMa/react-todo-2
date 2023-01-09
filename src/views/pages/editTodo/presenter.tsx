import React, { FC } from 'react';
import Title from '../../components/title';

const EditTodoUI: FC = () => {
	return (
		<div>
			<Title title={'TODO編集'} />
			TodoListUI
		</div>
	);
};

export default EditTodoUI;
