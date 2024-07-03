import React, { useState } from 'react';
import GroceryList from './components/GroceryList';
import AComponent from './components/AComponent';
import MyInput from './components/MyInput';

const App = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  return (
    <div className="p-8 space-y-12 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen font-poppins">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">My Application</h1>
      <GroceryList />
      <AComponent />
      <div className="my-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Text State Example</h2>
        <MyInput text={text} setText={setText} />
        <p className="mt-4 p-4 bg-white rounded-lg shadow text-gray-800 border border-gray-200">
          <span className="font-semibold text-lg text-blue-700">Current Text:</span> {text}
        </p>
      </div>
      <div className="my-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Color State Example</h2>
        <MyInput text={color} setText={setColor} />
        <div className="p-4 mt-4 rounded-lg shadow-lg text-white border border-gray-200" style={{ backgroundColor: color }}>
          <span className="font-semibold text-lg">This is the container with dynamic background color.</span>
        </div>
      </div>
    </div>
  );
};

export default App;
