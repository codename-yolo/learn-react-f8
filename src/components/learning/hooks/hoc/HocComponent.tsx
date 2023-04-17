import React, { FC, memo } from 'react';

interface HocComponentProps {
	name: string;
	data?: any;
	setData?: any;
}

const HocComponent: FC<HocComponentProps> = (props) => {
	const { name, data, setData } = props;
	console.log('render hoc', data, setData);

	return <div>{name}</div>;
};

export default memo(HocComponent);
