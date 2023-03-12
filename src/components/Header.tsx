import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const Header = () => {
    const data = [
        { id: '1', value: '0001', label: 'Option 1' },
        { id: '2', value: '0001', label: 'Option 2' },
        { id: '3', value: '0001', label: 'Option 3' },
    ];
    const [valueInput, setValueInput] = useState('');

    function onChange(...rest: any) {
        console.log('change', rest);
    }

    function onBlur(...rest: any) {
        console.log('blur', rest);
    }

    function onFocus(...rest: any) {
        console.log('focus', rest);
    }

    function onSearch(...rest: any) {
        console.log('search:', rest);
    }

    return (
        <AutoComplete
            style={{ width: 200 }}
            onSelect={(value, options) => {
                setValueInput(options.data.value);
                console.log('selected', value, options);
            }}
            value={valueInput}
            placeholder="input here"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        >
            {data.map((item) => {
                return (
                    <AutoComplete.Option key={item.id} data={item}>
                        {item.value}
                    </AutoComplete.Option>
                );
            })}
        </AutoComplete>
    );
};

export default Header;
