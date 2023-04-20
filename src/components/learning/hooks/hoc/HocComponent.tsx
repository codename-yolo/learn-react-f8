import React, { FC, ReactNode, memo } from 'react';

interface HocComponentProps {
	name?: string;
	data?: any;
	setData?: any;
	children?: ReactNode;
}

const HocComponent: FC<HocComponentProps> = (props) => {
	const { name, data, setData, children } = props;
	return <div>{name}</div>;
};

export default memo(HocComponent);
