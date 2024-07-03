import React from 'react';

const MyInput = ({ text, setText }) => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="border p-3 w-full mb-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default MyInput;
