import React, { FC } from 'react';
import ShowInfoUser from './showInfoUser';

const LearnUseReducer: FC = () => {
	return (
		<div>
			{[1, 2].map((item) => (
				<div key={item}>
					<ShowInfoUser idComponent={item} name={item.toString()} />
				</div>
			))}
		</div>
	);
};

export default LearnUseReducer;
