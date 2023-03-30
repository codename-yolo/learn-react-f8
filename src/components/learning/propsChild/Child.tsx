import React from 'react';

interface IProps {
	str: any;
	express: any;
	children: any;
	style: any;
}

const Child = ({ str, express, children, ...rest }: IProps) => {
	console.log(str, express, children, rest);
	return <div {...rest}>Child</div>;
};

export default Child;
