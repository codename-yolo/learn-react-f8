import React, { FC, useState } from 'react';

import Background from './Background';

const ChangeBackground: FC = () => {
	const [toggleBackground, setToggleBackground] = useState<boolean>(false);

	const handleToggleBackground = () => {
		setToggleBackground(!toggleBackground);
	};

	return (
		<div>
			<button role="button" onClick={handleToggleBackground}>
				Toggle Bg
			</button>
			{toggleBackground && <Background />}
		</div>
	);
};

export default ChangeBackground;
