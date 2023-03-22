import React, { useEffect } from 'react';

const Hoisting = () => {
	const functionHoisting = () => {
		console.log(a);
		return 123;
	};

	const a = 'Test hoisting';

	return <div>Hoisting</div>;
};

/**
- Cơ chế hoisting:  
+ Khi mà gán biến a cho một const thì có thể dùng console ở trong hàm functionHoisting mà không bị lỗi chưa define mà đã sử dụng vì khi hàm mà functionHoisting được gọi thì nó mới kiểm tra xem biến a được tạo chưa, khi console trong hàm functionHoisting thì mới chỉ là định nghĩa thôi

*/

export default Hoisting;
