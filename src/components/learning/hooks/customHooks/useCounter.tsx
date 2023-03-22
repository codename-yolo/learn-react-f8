import { useState, useEffect, useDebugValue } from 'react';

// useDebugValue

const useCounter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count < 10) {
			const timer = setTimeout(() => {
				setCount(count + 1);
			}, 1000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [count]);

	useDebugValue(count);

	return count;
};

export default useCounter;
