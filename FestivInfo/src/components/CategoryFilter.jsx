import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <select
      className="p-3 border border-gray-300 rounded-lg w-full md:w-1/4 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
