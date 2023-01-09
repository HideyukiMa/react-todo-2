import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';

const CreateTodoUI: FC = () => {
	return (
		<div>
			<Header title="Todo作成" path={paths.todoList} buttonText="一覧に戻る" />
			TodoListUI
		</div>
	);
};

export default CreateTodoUI;
