import React from 'react';
import './Home.scss';

const Home = () => {
  const say = (text: any) => {
    return text;
  };
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-3">Item 1</div>
        <div className="col l-3">Item 2</div>
        <div className="col l-3">Item 3</div>
        <div className="col l-3">Item 4</div>
      </div>
    </div>
  );
};

export default Home;
