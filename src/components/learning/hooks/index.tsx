import React, {
	useCallback,
	useEffect,
	useId,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
} from 'react';
import axios from 'axios';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

import DeferredValueComponent from './components/DeferredValueComponent';
import UseIdComponent from './components/IdComponent';
import ImperativeHandleComponent, { InputHandle } from './components/ImperativeHandleComponent';
import InsertionEffectComponent from './components/InsertionEffectComponent';

import useCounter from './customHooks/useCounter';

import { userReducer, initValue } from './learnUseReducer/const';
import LearnUseReducer from './learnUseReducer';
import { Button, Card, Divider, List, Space, Typography } from 'antd';
import HocComponent from './hoc/HocComponent';
import TodoList from '../TodoList';
import TodoListContext from '../todoContextReducer';

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
	// const buttonName = ['Posts', 'Comments', 'Albums', 'Users'];
	// const [title, setTitle] = useState<string>('');
	// const [data, setData] = useState<[]>([]);
	// const [type, setType] = useState<string>('');
	// const [loading, setLoading] = useState<boolean>(false);

	// const [count, setCount] = useState<number>(1);

	// console.log('render comp');

	// useEffect(() => {
	// 	console.log(1);
	// },[count])

	// useEffect(() => {
	// 	console.log(`Render lan thu ${count}`);
	// 	return () => {
	// 		console.log(`Clear lan thu ${count}`);
	// 	};
	// }, [count]);

	// const getData = async (type: string) => {
	// 	if (!type) return;
	// 	try {

	// 		setLoading(true)
	// 		const response = await axios.request({
	// 			url: `https://jsonplaceholder.typicode.com/${type}`,
	// 		});
	// 		if (response.status === 200) {
	// 			setData(response.data)
	// 		}

	// 	} catch (error) {
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// };

	// useEffect(() => {
	// 	getData(type);
	// }, [type]);

	// useEffect(() => {
	// 	document.title = title;
	// }, [title]);

	/* useLayoutEffect */
	// const [count, setCount] = useState<number>(1);

	// useLayoutEffect(() => {
	// 	console.log('layout effect');
	// 	if (count > 3 ){
	// 		console.log('count > 3');
	// 		setCount(0)
	// 	}
	// 	return () => {
	// 		console.log('clear',count);
	// 	}
	// }, [count])

	/* useReducer */

	/* useRef */
	// const [count, setCount] = useState<number>(60);

	// let timer: any;

	// const handleStart = () => {
	// 	timer = setInterval(() => {
	// 		setCount((prev) => prev - 1);
	// 	}, 1000);
	// 	console.log('start', timer);
	// };

	// const handleStop = () => {
	// 	console.log('stop', timer);
	// 	clearInterval(timer);
	// };

	/* memo */

	// const [data, setData] = useState<any>({
	// 	name: 123,
	// });

	// const [num, setNum] = useState<number>(0);

	/* useContext with useReducer */

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
			{/* <input
				type="text"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<Divider>Call Api </Divider>
			<Space>
				{buttonName.map((name) => {
					return (
						<Button
							key={name}
							type="primary"
							size="large"
							onClick={() => {
								console.log(name.toLowerCase());
								
								setType(name.toLowerCase());
							}}
						>
							{name}
						</Button>
					);
				})}
			</Space>
			<List
				itemLayout="horizontal"
				dataSource={data}
				loading={loading}
				renderItem={(item: any) => (
					<List.Item>
						<List.Item.Meta
							title={item.title}
							description={item?.body || item?.name}
						/>
					</List.Item>
				)}
			/>
			{count}
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				up
			</button> */}

			{/* useReducer */}
			{/* <LearnUseReducer /> */}

			{/* useRef */}
			{/* <Card
				style={{ width: 300 }}
				cover={<Typography>{count}</Typography>}
				actions={[
					<Button key="start" onClick={handleStart} icon={<UpOutlined />} />,
					<Button key="stop" onClick={handleStop} icon={<DownOutlined />} />,
				]}
			/> */}

			{/* memo */}
			{/* {num}
			<Button onClick={() => setNum((prev) => prev + 1)}>Up</Button>
			<HocComponent name="123" data={data} /> */}

			{/* useContext with useReducer*/}
			<TodoListContext />
		</>
	);
};

export default Hooks;
