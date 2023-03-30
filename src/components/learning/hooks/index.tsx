import React, {
	useCallback,
	useEffect,
	useId,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import DeferredValueComponent from './components/DeferredValueComponent';
import UseIdComponent from './components/IdComponent';
import ImperativeHandleComponent, { InputHandle } from './components/ImperativeHandleComponent';
import InsertionEffectComponent from './components/InsertionEffectComponent';

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
	/* useState */

	// const [state, setState] = useState<any>();

	/* useRef */

	// const eleRef = useRef<HTMLDivElement>(null)

	/* useEffect */

	// useEffect(() => {
	// Clear function

	// 	return () => {
	// 		console.log('Clear function');
	// 	};
	// }, []);

	/* useLayoutEffect */

	// useLayoutEffect(() => {
	// Clear function

	// 	return () => {
	// 		console.log('Clear function');
	// 	};
	// }, []);

	/* useInsertionEffect */

	// useInsertionEffect(() => {
	// Clear function

	// 	return () => {
	// 		console.log('Clear function');
	// 	};
	// }, []);

	/* useDebugValue */
	// Tạo ra một label theo dõi state trong dev tools

	// const count = useCounter();

	/* useDeferredValue */
	// Trì hoãn update state trong một khoảng thời gian ngắn
	// Dùng để hạn chế những lần render không cần thiết

	// const [name, setName] = useState('');

	// const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setName(e.target.value);
	// };

	/* useId */
	// Tạo ra một id riêng biệt với từng component

	// const id = useId();

	/* useInsertionEffect */
	// Dùng để thao tác với các element khi chúng được thêm vào dom ( thêm class, thuộc tính css, attr, text, ...)
	// Khi nó được gọi thì lúc đó vẫn chưa dùng được các state, ref,...
	// Luôn luôn được gọi trước

	// const [flag, setFlag] = useState(false);

	// const handleClickFlag = () => {
	// 	setFlag(!flag);
	// };

	/* useImperativeHandle */
	// Là một hook trong React được sử dụng để kiểm soát cách một component con được truy cập bởi component cha thông qua ref.
	// Dùng khi chúng ta muốn component con cung cấp một số phương thức cho component cha để truy cập vào một số tính năng hoặc hành động cụ thể của component con đó mà không cần thông qua props.

	// const inputRef = useRef<InputHandle>(null)

	// const handleClearInput = () => {
	// 	inputRef.current?.clear()
	// }

	/* useEffect */
	// Luôn được gọi sau khi component được mounted
	const [title, setTitle] = useState<string>('');

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			{/* useDebugValue */}
			{/* <h1>{count}</h1> */}

			{/* useDeferredValue */}
			{/* <input type="text" value={name} onChange={handleChangeName} /> */}
			{/* <DeferredValueComponent name={name} /> */}

			{/* useId*/}
			{/* <UseIdComponent /> */}

			{/* useInsertionEffect */}
			{/* <div className="main">{flag && <InsertionEffectComponent />}</div> */}
			{/* <button onClick={handleClickFlag}>Click</button> */}

			{/* useImperativeHandle */}
			{/* <ImperativeHandleComponent ref={inputRef} name="ref"/> */}
			{/* <button onClick={handleClearInput}>Clear Input</button> */}

			{/* useEffect */}
			<input
				type="text"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
		</>
	);
};

export default Hooks;
