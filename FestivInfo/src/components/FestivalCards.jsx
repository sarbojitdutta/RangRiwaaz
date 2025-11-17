import React from 'react';

const FestivalCard = ({ festival }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      {festival.image && (
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {festival.name}
        </h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Date:</span> {festival.date}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Regions:</span> {festival.regions}
        </p>
        <p className="text-gray-700 text-sm mt-3">{festival.description}</p>
      </div>
    </div>
  );
};

export default FestivalCard;
