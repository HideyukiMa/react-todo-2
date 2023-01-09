import React, { FC } from 'react';
import { Props } from './types';
import classes from './index.module.scss';
import Title from '../title';
import { Link } from 'react-router-dom';

const Header: FC<Props> = ({ title, path, buttonText }) => {
	return (
		<div className={classes.root}>
			<Title title={title} />
			<Link to={path} className={classes.link}>
				<button className={classes.button}>{buttonText}</button>
			</Link>
		</div>
	);
};

export default Header;
