import React, { useContext } from 'react';
import { CountContext } from './AComponent';

const CComponent = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="flex space-x-4">
      <button onClick={() => setCount(count + 1)} className="m-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} className="m-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200">
        Decrement
      </button>
      <button onClick={() => setCount(0)} className="m-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition duration-200">
        Reset
      </button>
    </div>
  );
};

export default CComponent;
