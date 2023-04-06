import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { actionTypeValue } from '../const';

interface ModalInfoProps {
	isOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	dispatchUser: any;
	name: string;
}

const ModalInfo: React.FC<ModalInfoProps> = ({
	isOpen,
	handleOk,
	handleCancel,
	dispatchUser,
	name,
}) => {
	useEffect(() => {
		return () => {
			console.log('unmount');

			dispatchUser({
				type: actionTypeValue.reset_user,
				payload: {},
			});
		};
	}, []);

	return (
		<>
			<Modal title="Basic Modal" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default ModalInfo;
