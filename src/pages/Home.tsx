import React from 'react';
import './Home.scss';

const Home = () => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, e.target.checked);
    };

    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-3">Item 1</div>
                <div className="col l-3">Item 2</div>
                <div className="col l-3">Item 3</div>
                <div className="col l-3">Item 4</div>
            </div>
            <div className="row">
                <input type="checkbox" onChange={handleOnChange} value="1" />
                <input type="checkbox" onChange={handleOnChange} value="2" />
                <input type="checkbox" onChange={handleOnChange} value="3" />
                <input type="checkbox" onChange={handleOnChange} value="4" />
            </div>
        </div>
    );
};

export default Home;
