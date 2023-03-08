import React from 'react';
import './Home.scss';

const Home = () => {
  const say = (text: any) => {
    return text;
  };
  return (
    <div className="grid-container">
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      <div className="grid-item">Item 4</div>
      <div className="grid-item">Item 5</div>
    </div>
  );
};

export default Home;
