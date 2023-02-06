import React, { FC } from 'react';
import { Props } from './types';
import ListItemUI from './presenter';


const ListItem: FC<Props> = ({ id, title, details, isDone }) => {

	return (
		<ListItemUI
			id={id}
			title={title}
			details={details}
			isDone={isDone}
		/>
	);
};

export default ListItem;
