import React, { ReactNode, createContext, useState } from 'react';

export const Context = createContext<any>(null);

const { Provider } = Context;

const ProviderComponent = ({ children, value }: any) => (
	<Provider value={value}>{children}</Provider>
);

export default ProviderComponent;
