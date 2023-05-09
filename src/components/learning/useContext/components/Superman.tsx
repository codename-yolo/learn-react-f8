import React, { FC, useContext } from 'react';
import { Context } from '../context';

const Superman: FC = () => {
	console.log(Context);

	// const {info}:  any = useContext(Context)

	return (
		<div>
			<Context.Consumer>{(data) => <>{console.log(data)}</>}</Context.Consumer>
		</div>
	);
};

export default Superman;
