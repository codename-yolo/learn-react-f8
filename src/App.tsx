import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '@components/Header';
import Home from './pages/Home';
import Hoisting from '@components/learning/Hoisting';
import Parent from '@components/learning/propsChild/Parent';
import WebSocket from '@components/learning/WebSocket';
import TodoList from '@components/learning/TodoList';
import Hooks from '@components/learning/hooks';
import ChangeBackground from '@components/learning/mountUnmount';
import Closure from '@components/learning/Closure';

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
			<Switch>
				<Route path="/header" component={Header} />
				<Route path="/home" component={Home} />
				<Route path="/hoisting" component={Hoisting} />
				<Route path="/props-child" component={Parent} />
				<Route path="/ws" component={WebSocket} />
				<Route path="/todo-list" component={TodoList} />
				<Route path="/hooks" component={Hooks} />
				<Route path="/closure" component={Closure} />
				<Route path="/change-bg" component={ChangeBackground} />
			</Switch>
		</div>
	);
}

export default App;
