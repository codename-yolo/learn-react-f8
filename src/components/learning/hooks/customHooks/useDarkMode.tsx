import React, { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDarkMode(true);
		}, 1000);
	}, []);
	return isDarkMode;
};

export default useDarkMode;
