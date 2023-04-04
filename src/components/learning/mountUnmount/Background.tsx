import React, { FC } from 'react';

import styles from './Background.scss';

const Background: FC = () => {
	return (
		<div className={styles['my-class']}>
			<span className="text-red">Hello world</span>
		</div>
	);
};

export default Background;
