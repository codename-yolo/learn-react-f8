import React, { useImperativeHandle, useRef } from 'react';

interface IProps {
	name: string;
}

export interface InputHandle {
	focus: () => void;
	clear: () => void;
}

const ImperativeHandleComponent: React.ForwardRefRenderFunction<InputHandle, IProps> = (
	props,
	ref,
) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		},
		clear: () => {
			if (inputRef.current) inputRef.current.value = '';
		},
	}));
	return (
		<>
			<input type="text" ref={inputRef} />
		</>
	);
};

export default React.forwardRef(ImperativeHandleComponent);
