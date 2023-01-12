import React, { FC } from 'react';
import AppRoutes from './routes';
import classes from './App.module.scss';

const App: FC = () => {
	return (
		<div className={classes.root}>
			<AppRoutes />
		</div>
	);
};

export default App;
