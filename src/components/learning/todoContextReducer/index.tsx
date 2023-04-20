import React, { FC, useReducer } from 'react';

import InputField from './components/InputField';
import ListTodo from './components/ListTodo';

import todoListReducer from './store/reducer';
import ContextProvider from './context';

import { initState } from './common';

const TodoList: FC = () => {
	const [valueTodoList, dispatch] = useReducer(todoListReducer, initState);

	return (
		<ContextProvider
			value={{
				state: valueTodoList,
				dispatch,
			}}
		>
			<InputField />
			<ListTodo />
		</ContextProvider>
	);
};

export default TodoList;
