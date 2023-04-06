import React, { FC, useEffect, useReducer, useState } from 'react';
import { Button } from 'antd';

import ModalInfo from '../components/ModalInfo';

import { actionTypeValue, initValue, userReducer } from '../const';

interface ShowInfoUserIProps {
	name?: string;
	idComponent: number;
}

const ShowInfoUser: FC<ShowInfoUserIProps> = (props) => {
	const { name } = props;

	const [userData, dispatchUser] = useReducer(userReducer, initValue);
	console.log(userData.user);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		dispatchUser({
			type: actionTypeValue.update_user,
			payload: {
				user: {
					name: 'Đoàn Mạnh Cường',
					age: 25,
					address: 'vn',
				},
			},
		});
		setIsModalOpen(true);
	};

	useEffect(() => {
		return () => {
			dispatchUser({
				type: actionTypeValue.reset_user,
				payload: {},
			});
		};
	}, []);

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			{isModalOpen && (
				<ModalInfo
					dispatchUser={dispatchUser}
					name={name || ''}
					isOpen={isModalOpen}
					handleCancel={handleCancel}
					handleOk={handleOk}
				/>
			)}
			<Button type="primary" onClick={showModal}>
				Open Modal
			</Button>
		</div>
	);
};

export default ShowInfoUser;
