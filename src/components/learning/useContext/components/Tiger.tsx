import React, { FC, useContext } from 'react';
import ProviderComponent, { Context } from '../context';
import ChildrenTiger from './ChildrenTiger';

const Tiger: FC = () => {
	const data: any = useContext(Context);

	return (
		<ProviderComponent
			value={{
				name: 'tiger children',
			}}
		>
			<ChildrenTiger />
		</ProviderComponent>
	);
};

export default Tiger;
