import React, { FC } from 'react';
import classes from './index.module.scss';
import { Link } from 'react-router-dom';
import { Props } from './types';


const Header: FC <Props> = ({ title, path, buttonText })=> {
	return (
		<div className={classes.header}>
			<div className={classes.headerTitle}>{title}</div>
			<Link to={path} className={classes.link}>
				<button className={classes.returnButton}>{buttonText}</button>
			</Link>
		</div>
	);
};

export default Header;
