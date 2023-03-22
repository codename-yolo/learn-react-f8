import React from 'react';

interface IProps {
	str: any;
	express: any;
	children: any;
}

const Child = ({ str, express, children }: IProps) => {
	console.log(str, express, children);
	return <div>Child</div>;
};

export default Child;
