import React, { FC, useContext } from 'react';
import { Context } from '../context';

const ChildrenTiger: FC = () => {
	const data: any = useContext(Context);
	console.log(data);
	return <div>Tiger</div>;
};

export default ChildrenTiger;
