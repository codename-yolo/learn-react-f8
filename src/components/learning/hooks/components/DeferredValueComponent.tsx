import React, { useDeferredValue, useMemo } from 'react';

interface IProps {
	name: string;
}

const DeferredValueComponent = React.memo(({ name }: IProps) => {
	const value = useDeferredValue(name);

	const items = useMemo(() => {
		console.log(1);
		const array = [];
		for (let index = 0; index < 20000; index++) {
			array.push(<h1>{name}</h1>);
		}
		return array;
	}, [value]);

	return (
		<>
			<ul>
				{items.map((item: any, idx: number) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>
		</>
	);
});

export default DeferredValueComponent;
