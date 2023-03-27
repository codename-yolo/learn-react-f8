import React, { useDeferredValue, useEffect, useMemo } from 'react';

interface IProps {
	name: string;
}

const DeferredValueComponent = ({ name }: IProps) => {
	const deferredValue = useDeferredValue(name);

	const items = useMemo(() => {
		const array = [];
		for (let index = 0; index < 5; index++) {
			array.push(<h1>{deferredValue}</h1>);
		}
		return array;
	}, [deferredValue]);

	return (
		<>
			<ul>
				{items.map((item: any, idx: number) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>
		</>
	);
};

export default DeferredValueComponent;
