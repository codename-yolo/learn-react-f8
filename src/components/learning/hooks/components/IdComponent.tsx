import React, { useId } from 'react';

const IdComponent = () => {
	const id = useId();

	console.log('UseIdComponent', id);

	return <div>UseIdComponent</div>;
};

export default IdComponent;
