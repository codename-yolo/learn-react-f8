import React, { FC, useContext } from 'react';
import { Button, Input } from 'antd';
import { Context } from '../context';
import { addJob, changeJob } from '../store/action';

const InputField: FC = () => {
	const {
		dispatch,
		state: { job },
	} = useContext(Context);

	const handleChangeJob = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeJob(e.target.value));
	};

	const handleAddJob = () => {
		dispatch(addJob({ name: job, completed: false }));
	};

	return (
		<div style={{ width: 200 }}>
			<Input placeholder="Basic usage" value={job} width={200} onChange={handleChangeJob} />
			<Button onClick={handleAddJob}>Add Job</Button>
		</div>
	);
};

export default InputField;
