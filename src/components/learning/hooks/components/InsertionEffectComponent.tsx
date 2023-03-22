import React, { useInsertionEffect } from 'react';

const InsertionEffectComponent = () => {
	useInsertionEffect(() => {
		const main = document.querySelector('.main');
		main?.classList.add('red');
		return () => {
			main?.classList.remove('red');
		};
	}, []);

	return <div className="abc">InsertionEffectComponent</div>;
};

export default InsertionEffectComponent;
