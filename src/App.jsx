import React from 'react';
import StatsCards from './StatCards/CardsLayout';
import { statsConfig } from './data';
import './index.css'

export default function App() {
  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold">Dashboard Stats</h3>

      <StatsCards statsData={statsConfig} />
    </div>
  );
}
