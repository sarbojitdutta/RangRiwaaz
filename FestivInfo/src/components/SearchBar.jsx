import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search festivals..."
      className="p-3 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
