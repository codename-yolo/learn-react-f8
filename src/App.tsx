import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import Home from './pages/Home';
import Hoisting from '@components/learning/Hoisting';
import Parent from '@components/learning/propsChild/Parent';
import WebSocket from '@components/learning/WebSocket';
import TodoList from '@components/learning/TodoList';
import Hooks from '@components/learning/hooks';

/**
- Syntax reactElement document.createElement(type, props, children, n) (từ tham số thứ 3 đều thành children) 
- Type trong createElement có thể là một function ( khi là funtion nó sẽ tự động gọi function đấy và lấy jsx và lại render ra react Element như bình thường)
- Do browser không thể biên dịch được reactElement nên cần dùng thư viện Babel biên dịch thành javascript để browser có thể biên dịch được
- Ở trong syntax jsx cần dùng {} để có thể dùng js nên: 
+ Khi truyền destructuring  <input {...{type: 'checkbox}}> cho component input thì tương tự như <input type='checkbox'> vì ở jsx sẽ cho {} là khai báo để dùng js , thực chất nó sẽ chỉ lấy properties 
vd : muốn truyền style cho ele bất kỳ thì có thể <div style={{width: '20px'}}> </div> ở đấy vì style cần truyền 1 obj lên mới cần 2 dấu {} ( dấu đầu tiên là khai báo dùng js còn dấu thứ 2 chính là 1 obj
 */

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/header" element={<Header />} />
				<Route path="/home" element={<Home />} />
				<Route path="/hoisting" element={<Hoisting />} />
				<Route path="/props-child" element={<Parent />} />
				<Route path="/ws" element={<WebSocket />} />
				<Route path="/todo-list" element={<TodoList />} />
				<Route path="/hooks" element={<Hooks />} />
			</Routes>
		</div>
	);
}

export default App;
