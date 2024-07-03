import React, { useEffect, useState } from 'react';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setGroceries(data);
      } catch (error) {
        console.error('Failed to fetch groceries:', error);
      }
    };

    fetchGroceries();
  }, []);

  const filteredGroceries = groceries.filter(grocery =>
    grocery.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grocery List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 w-full mb-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="space-y-4">
        {filteredGroceries.map(grocery => (
          <li key={grocery.id} className="border p-3 rounded-lg shadow bg-gray-50 hover:bg-gray-100 transition duration-200">
            {grocery.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
