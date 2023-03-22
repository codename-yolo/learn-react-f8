import React, { useDeferredValue } from 'react';

const useDebounce = (name: string) => {
	const deferredValue = useDeferredValue(name);

	return deferredValue;
};

export default useDebounce;
