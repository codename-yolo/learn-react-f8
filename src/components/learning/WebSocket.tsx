import React, { useEffect, useState } from 'react';

const TestWebSocket = () => {
    const [message, setMessage] = useState();
    let ws: any = null;
    const createConnection = () => {
        const url =
            'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
        ws = new WebSocket(url);

        ws.onmessage = (msg: any) => {
            console.log(msg); // Hàm nhận msg mỗi khi server trả về data
        };
        ws.onopen = (msg: any) => {
            console.log(msg); // Hàm nhận msg mỗi khi socket được tạo thành công
        };
        ws.send = (msg: any) => {
            console.log(msg); // Hàm nhận msg mỗi khi client send msg lên server
        };
        ws.onerror = (...args: any) => {
            console.log(args); // Hàm nhận msg mỗi khi socket xảy ra lỗi (Khi xảy ra lỗi thì sẽ trả về msg ở hàm onerror trước xong mới trả msg về hàm onclose)
        };
        ws.onclose = (msg: any) => {
            console.log(msg); // Hàm nhận msg mỗi khi socket bị đóng
        };
        return () => {
            ws.close(3001, 'thich thiccc'); // Hàm được sử dụng để đóng kết nối WebSocket hiện tại
            // Tham số đầu là code, tham số 2 là reason
            // Có thể tuỳ chỉnh mã code lỗi là gì nhưng code bắt buộc nằm trong các giá trị sau
            //1000: kết nối đã được đóng thành công.
            //3000 đến 3999: mã lỗi trong khoảng này được sử dụng để đại diện cho các lỗi do server.
            //4000 đến 4999: mã lỗi trong khoảng này được sử dụng để đại diện cho các lỗi do client.
        };
    };
    useEffect(() => {
        const closeWs = createConnection();
        return closeWs;
    });
    const handleSendMsg = () => {
        ws.send('abc'); // Có thể chủ động từ client gửi data lên server ( Có trường hợp dùng để thông báo với server là client sẵn sàng nhận msg)
    };
    return (
        <button role="button" onClick={handleSendMsg}>
            Send Message
        </button>
    );
};

export default TestWebSocket;
