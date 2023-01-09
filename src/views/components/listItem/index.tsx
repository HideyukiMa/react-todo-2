import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';

const ListItem: FC<Props> = ({ id, title, isDone }) => {
	return (
		<div>
			<input type="checkbox" disabled defaultChecked={isDone} />
			<div>
				<Link to={`/todo/${id}`}>{title}</Link>
				<div>
					<button>編集</button>
					<button>削除</button>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
