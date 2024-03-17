import React, { useState } from 'react';

import './App.css';

const Fisz = ({ front, back, active, onFlip }) => {
  return (
    <div className='col'>
      <div className={`fisz d-flex justify-content-center align-items-center mb-4 ${active ? 'active' : ''}`} onClick={onFlip}>
        {active ? <div className="back">{back}</div> : <div className="front">{front}</div>}
      </div>
    </div>
  );
};

const Fiszs = ({ dataArray }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="row row-cols-3 mt-4 gx-4">
      {dataArray.map((item, index) => (
        <Fisz
          key={index}
          front={item.front}
          back={item.back}
          active={index === flippedIndex}
          onFlip={() => handleFlip(index)}
        />
      ))}
    </div>
  );
};

const App = () => {
  const dataArray = [
    { front: 'Q 1', back: 'A 1' },
    { front: 'Q 2', back: 'A 2' },
    { front: 'Q 3', back: 'A 3' },
    { front: 'Q 3', back: 'A 3' }
  ];

  return (
    <div className="app">
      <header className="d-flex justify-content-center align-items-center bg-dark text-white py-2 app-header">
        <h1>Fiszki</h1>
      </header>
      <div className="container-md">
          <Fiszs dataArray={dataArray} />
      </div>
    </div>
  );
};

export default App;