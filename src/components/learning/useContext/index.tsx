import React from 'react';
import AnimalComponent from './AnimalComponent';
import PersonComponent from './PersonComponent';

// Các component con sẽ chỉ nhận được value từ provider bao chúng nên không sợ bị trùng value khi chỉ có 1 context mà có nhiều provider ( chỉ có trường hợp lồng provider thì các component xa với component lấy value nhất sẽ bị ghi đè bởi provider gần component lấy value)
// Các component con sẽ luôn nhận values từ provider gần nhất nếu có nhiều provider lồng nhau

function Meta() {
	return (
		<>
			<AnimalComponent />
			<PersonComponent />
		</>
	);
}

export default Meta;
