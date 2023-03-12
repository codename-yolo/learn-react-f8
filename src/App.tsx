import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import Home from './pages/Home';
import Hoisting from '@components/learning/Hoisting';
import Parent from '@components/learning/propsChild/Parent';

/**
- Syntax reactElement document.createElement(type, props, children, n) (từ tham số thứ 3 đều thành children) 
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
            </Routes>
        </div>
    );
}

export default App;
