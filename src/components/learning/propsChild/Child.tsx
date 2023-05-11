import React, { useEffect, useState } from 'react';

interface IProps {
	str: any;
	express: any;
	children: any;
	style: any;
}

const Child = ({ str, express, children, ...rest }: IProps) => {
	console.log('render c');

	const [num, setNum] = useState<number>(0);

	useEffect(() => {
		console.log('uef c setState');
		setNum(1);
	}, []);

	return (
		<div {...rest}>
			<>{console.log('return c')}</>
		</div>
	);
};

export default Child;
