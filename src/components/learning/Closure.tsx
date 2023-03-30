import React, { FC } from 'react';

const Closure: FC = () => {
	const increase = () => {
		let a = 1;
		return () => {
			return ++a;
		};
	};

	const b = increase();

	console.log(b());
	console.log(b());
	console.log(b());
	return <div>Closure</div>;
};

export default Closure;
