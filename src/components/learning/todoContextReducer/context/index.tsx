import React, { FC, createContext } from 'react';
import { TypeContextProviderValue, TypeContextValue } from '../types';
import { initState } from '../common';

export const Context = createContext<TypeContextValue>({
	state: initState,
	dispatch: () => undefined,
});

const ContextProvider: FC<TypeContextProviderValue> = ({ children, value }) => (
	<Context.Provider value={value}>{children}</Context.Provider>
);

export default ContextProvider;
