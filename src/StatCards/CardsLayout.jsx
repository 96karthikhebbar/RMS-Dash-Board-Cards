import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from './Card';

export default function StatsCards({ statsData }) {
  if (!Array.isArray(statsData)) return null;

  return (
    <div
      className="d-grid gap-3 cardsGridLayout"
    >
      {statsData.map((stat, index) => (
        <Card key={index} index={index} stat ={stat} />
      ))}
    </div>
  );
}
