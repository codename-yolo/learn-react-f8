import React from 'react';
import Child from './Child';

const Parent = () => {
    const obj = {
        a: 1,
    };
    return (
        <div>
            <Child str="123" express={{ ...obj }}>
                string
            </Child>
        </div>
    );
};

/** 
// Ở trong component Child có thể nhận tất cả các data nằm trong <Child></Child> dưới key là children
// Nếu chỉ có 1 children thì children bên component Child sẽ trả về luôn children đấy, còn nếu children bằng 2 trở lên thì children bên component Child sẽ trở thành [] chứ tất cả các children được truyền ( ở vd  trên children sẽ là 'string' nếu truyền 1 và ['string', {a: 1}] nếu truyền 2 )
 */

export default Parent;
