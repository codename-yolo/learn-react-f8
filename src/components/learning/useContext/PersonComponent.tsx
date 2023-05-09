import React, { FC, useState } from 'react';
import ProviderComponent from './context';
import Superman from './components/Superman';

const PersonComponent: FC = () => {
	const [supermanInfo, setSupermanInfo] = useState({
		name: 'clark kent',
		year: 1999,
	});

	return (
		<ProviderComponent
			value={{
				info: supermanInfo,
				setSupermanInfo,
			}}
		>
			<Superman />
		</ProviderComponent>
	);
};

export default PersonComponent;
