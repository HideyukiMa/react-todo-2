import React, { FC } from 'react';
import { Props } from './types';
import classes from './index.module.scss';

const Title: FC<Props> = ({ title }) => {
	return <div className={classes.title}>{title}</div>;
};

export default Title;
