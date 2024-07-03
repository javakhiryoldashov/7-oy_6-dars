import React, { useState, createContext } from 'react';
import BComponent from './BComponent';

export const CountContext = createContext();

const AComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className="max-w-xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg my-8 border border-blue-200">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Count: {count}</h2>
        <BComponent />
      </div>
    </CountContext.Provider>
  );
};

export default AComponent;
