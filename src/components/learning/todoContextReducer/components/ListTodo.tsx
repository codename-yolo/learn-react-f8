import React, { FC, useContext, useMemo } from 'react';
import { List } from 'antd';
import { Context } from '../context';

const ListTodo: FC = () => {
	const {
		state: { jobs },
	} = useContext(Context);

	return (
		<div>
			<List
				itemLayout="horizontal"
				dataSource={jobs}
				renderItem={(item, index) => (
					<List.Item>
						<List.Item.Meta description={item?.name} />
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ListTodo;
