import React, { useEffect, useState } from 'react';

import useCounter from './customHooks/useCounter';

/**
 * useState
 * useEffect
 * useLayoutEffect
 * useRef
 * useMemo
 * useCallBack
 * useContext
 * useReducer
 * useDebugValue
 * useDeferredValue
 * useId
 * useInsertionEffect
 * useImperativeHandle
 * useSyncExternalStore
 * useTransition
 */

const Hooks = () => {
	// useState
	const [state, setState] = useState<any>()

	// useEffect
	useEffect(() => {
		
		// Clear function
		return () => {
			console.log('Clear function');
		}
	}, [])

	// useDebugValue
	const count = useCounter();

	return (
		<>
			<h1>{count}</h1>
		</>
	);
};

export default Hooks;
