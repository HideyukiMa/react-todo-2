import React, { FC } from 'react';
import paths from '../../../config/paths';
import Header from '../../components/header';

const TodoDetailUI: FC = () => {
	return (
		<div>
			<Header title="Todo詳細" path={paths.todoList} buttonText="一覧に戻る" />
			TodoListUI
		</div>
	);
};

export default TodoDetailUI;
