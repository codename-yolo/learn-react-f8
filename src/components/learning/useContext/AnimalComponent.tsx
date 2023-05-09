import React, { FC, useState } from 'react';
import ProviderComponent from './context';
import Tiger from './components/Tiger';

const AnimalComponent: FC = () => {
	const [tigerInfo, setTigerInfo] = useState({
		name: 'bia tiger',
		year: 1999,
	});

	return (
		<ProviderComponent
			value={{
				info: tigerInfo,
				setTigerInfo,
			}}
		>
			<Tiger />
		</ProviderComponent>
	);
};

export default AnimalComponent;
