// src/components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 shadow-lg rounded-lg">
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <p className="text-3xl font-bold text-indigo-600">{value}</p>
  </div>
);

export default StatCard;
