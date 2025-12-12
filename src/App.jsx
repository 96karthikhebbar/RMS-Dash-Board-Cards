import React from 'react';
import StatsCards from './StatsCards';
import { statsConfig } from './data';

export default function App() {
  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold">Dashboard Stats</h3>

      <StatsCards statsData={statsConfig} />
    </div>
  );
}
